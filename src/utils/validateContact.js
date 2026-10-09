import validator from "validator";

export const MAX_MESSAGE_LENGTH = 2000;

// Returns an object of field -> error message. An empty object means valid.
export function validateContact({ name, email, subject, message }) {
  const errors = {};
  if (!name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!validator.isEmail(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!subject.trim()) {
    errors.subject = "Please enter a subject.";
  }
  if (!message.trim()) {
    errors.message = "Please enter a message.";
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`;
  }
  return errors;
}
