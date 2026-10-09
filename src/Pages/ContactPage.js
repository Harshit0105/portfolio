import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import styled from "styled-components";
import Title from "../Components/Title";
import ContactButton from "../Components/ContactButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import EmailJS from "emailjs-com";
import { validateContact, MAX_MESSAGE_LENGTH } from "../utils/validateContact";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

const FIELDS = [
  { id: "name", label: "Enter your name*", type: "text", autoComplete: "name" },
  { id: "email", label: "Enter your email*", type: "email", autoComplete: "email" },
  { id: "subject", label: "Enter your subject*", type: "text", autoComplete: "off" },
];

function ContactPage({ user }) {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const [form, setForm] = useState(EMPTY_FORM);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const errors = validateContact(form);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus(null);
  };
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!isValid || isSubmitting) {
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }
    setIsSubmitting(true);
    const template = {
      from_name: `${form.name.trim()} ${form.email.trim()}`,
      subject: form.subject.trim(),
      to_name: "Harshit Chudasama",
      feedback: form.message.trim(),
    };

    EmailJS.send(
      process.env.REACT_APP_ServiceId,
      process.env.REACT_APP_TemplateId,
      template,
      process.env.REACT_APP_userId
    )
      .then(() => {
        setForm(EMPTY_FORM);
        setTouched({});
        setStatus({ type: "success", text: "Thanks for reaching out! I'll get back to you soon." });
      })
      .catch(() => {
        // Keep what the user typed so they can retry without losing it.
        setStatus({ type: "error", text: "Something went wrong. Please try again in a moment." });
      })
      .finally(() => setIsSubmitting(false));
  };

  const fieldError = (field) => (touched[field] ? errors[field] : undefined);

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-section">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={handleFormSubmit} noValidate>
              {FIELDS.map(({ id, label, type, autoComplete }) => (
                <div className="form-field" key={id}>
                  <label htmlFor={id}>{label}</label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    autoComplete={autoComplete}
                    value={form[id]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(fieldError(id))}
                    aria-describedby={fieldError(id) ? `${id}-error` : undefined}
                  />
                  {fieldError(id) && (
                    <span className="field-error" id={`${id}-error`}>
                      {fieldError(id)}
                    </span>
                  )}
                </div>
              ))}
              <div className="form-field">
                <label htmlFor="message">Enter your message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={MAX_MESSAGE_LENGTH}
                  aria-invalid={Boolean(fieldError("message"))}
                  aria-describedby={fieldError("message") ? "message-error" : undefined}
                  cols="30"
                  rows="10"
                ></textarea>
                <span className="char-count">
                  {form.message.length}/{MAX_MESSAGE_LENGTH}
                </span>
                {fieldError("message") && (
                  <span className="field-error" id="message-error">
                    {fieldError("message")}
                  </span>
                )}
              </div>
              <div className="form-field f-button">
                <ContactButton
                  type="submit"
                  title={isSubmitting ? "Sending..." : "Send email"}
                  disabled={!isValid || isSubmitting}
                />
              </div>
              {status && (
                <p className={`form-status ${status.type}`} role="status" aria-live="polite">
                  {status.text}
                </p>
              )}
            </form>
          </div>
          <div className="right-section">
            <ContactItem
              icon={phone}
              title={"Phone"}
              contact1={user ? user.contact1 : ""}
              contact2={user ? user.contact2 : ""}
            />
            <ContactItem
              icon={email}
              title={"Email"}
              contact1={user ? user.email1 : ""}
              contact2={user ? user.email2 : ""}
            />
            <ContactItem
              icon={location}
              title={"Address"}
              contact1={user ? user.address1 : ""}
              contact2={user ? user.address2 : ""}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 980px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 2rem;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        font-size: 1.6rem;
        padding: 1rem 0;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 80%;
      }
      .field-error {
        display: block;
        margin-top: 0.3rem;
        color: #e74c3c;
        font-size: 0.85rem;
      }
      .char-count {
        display: block;
        text-align: right;
        font-size: 0.8rem;
        opacity: 0.7;
      }
      .form-status {
        margin-top: 1rem;
        &.success {
          color: #2ecc71;
        }
        &.error {
          color: #e74c3c;
        }
      }
      .form-field {
        width: 100%;
        margin-top: 2rem;
        position: relative;
        label {
          position: absolute;
          left: 20px;
          top: -17px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.4rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          padding: 0.4rem 15px;
          height: 40px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          width: 100%;
          padding: 0.8rem 1rem;
          color: inherit;
        }
      }
    }
    .right-section {
      /* margin-left: 1rem; */
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 80%;
      }
    }
  }
`;
export default ContactPage;
