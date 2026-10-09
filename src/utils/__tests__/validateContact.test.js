import { validateContact, MAX_MESSAGE_LENGTH } from "../validateContact";

const valid = {
  name: "Ada",
  email: "ada@example.com",
  subject: "Hello",
  message: "Hi there",
};

test("accepts a fully filled form", () => {
  expect(validateContact(valid)).toEqual({});
});

test("rejects whitespace-only fields", () => {
  const errors = validateContact({
    name: "   ",
    email: " ",
    subject: "\t",
    message: "\n",
  });
  expect(Object.keys(errors).sort()).toEqual([
    "email",
    "message",
    "name",
    "subject",
  ]);
});

test("rejects an invalid email", () => {
  expect(validateContact({ ...valid, email: "not-an-email" }).email).toMatch(
    /valid email/
  );
});

test("accepts an email with surrounding whitespace", () => {
  expect(validateContact({ ...valid, email: "  ada@example.com " })).toEqual(
    {}
  );
});

test("rejects an overly long message", () => {
  const message = "a".repeat(MAX_MESSAGE_LENGTH + 1);
  expect(validateContact({ ...valid, message }).message).toMatch(/fewer/);
});
