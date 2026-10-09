import base_url from "./config";

// Fetches `${base_url}${path}` and always resolves to { success, data, error }.
// Non-2xx responses and network failures resolve with success: false instead
// of throwing, so callers only need to check `success`.
export function fetchResource(path, { signal } = {}) {
  if (!base_url) {
    return Promise.resolve({
      success: false,
      data: [],
      error: "REACT_APP_baseUrl is not configured",
    });
  }
  return fetch(base_url + path, { signal })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      return res.json();
    })
    .then((body) => ({
      success: body.success === true,
      data: Array.isArray(body.data) ? body.data : [],
      error: body.success === true ? null : body.message || "Unknown error",
    }))
    .catch((err) => ({
      success: false,
      data: [],
      error: err.name === "AbortError" ? "aborted" : err.message,
    }));
}
