jest.mock("../config", () => "https://api.example.com/");

const { fetchResource } = require("../api");

function mockFetch(impl) {
  global.fetch = jest.fn(impl);
}

afterEach(() => {
  delete global.fetch;
});

test("returns data on a successful response", async () => {
  mockFetch(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ success: true, data: [{ _id: "1" }] }),
    })
  );
  const result = await fetchResource("skills/");
  expect(global.fetch).toHaveBeenCalledWith(
    "https://api.example.com/skills/",
    { signal: undefined }
  );
  expect(result).toEqual({ success: true, data: [{ _id: "1" }], error: null });
});

test("treats non-2xx responses as failures", async () => {
  mockFetch(() => Promise.resolve({ ok: false, status: 500 }));
  const result = await fetchResource("skills/");
  expect(result.success).toBe(false);
  expect(result.data).toEqual([]);
  expect(result.error).toMatch(/500/);
});

test("treats network errors as failures", async () => {
  mockFetch(() => Promise.reject(new TypeError("Failed to fetch")));
  const result = await fetchResource("skills/");
  expect(result).toEqual({
    success: false,
    data: [],
    error: "Failed to fetch",
  });
});

test("normalises a missing data array", async () => {
  mockFetch(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ success: false, message: "nope" }),
    })
  );
  const result = await fetchResource("skills/");
  expect(result).toEqual({ success: false, data: [], error: "nope" });
});
