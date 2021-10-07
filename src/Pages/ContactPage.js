import React, { useState, useEffect } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import styled from "styled-components";
import Title from "../Components/Title";
import ContactButton from "../Components/ContactButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import validator from "validator";
import EmailJS from "emailjs-com";

function ContactPage({ user }) {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const [name, setName] = useState("");
  const [emailField, setEmailField] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      name.length !== 0 &&
      emailField.length !== 0 &&
      validator.isEmail(emailField) &&
      subject.length !== 0 &&
      message.length !== 0
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, subject, message, emailField]);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailField(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Submited");
    const template = {
      from_name: name + " " + emailField,
      subject: subject,
      to_name: "Harshit Chudasama",
      feedback: message,
    };

    EmailJS.send(
      process.env.REACT_APP_ServiceId,
      process.env.REACT_APP_TemplateId,
      template,
      process.env.REACT_APP_userId
    ).then(
      (res) => {
        setName("");
        setMessage("");
        setSubject("");
        setEmailField("");
        alert("Thanks to contact me.");
      },
      (err) => {
        alert("There is some error please try again after some time!!");
        setName("");
        setMessage("");
        setSubject("");
        setEmailField("");
      }
    );
  };
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-section">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                ></input>
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input
                  type="email"
                  id="email"
                  value={emailField}
                  onChange={handleEmailChange}
                ></input>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject*</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={handleSubjectChange}
                ></input>
              </div>
              <div className="form-field">
                <label htmlFor="textarea">Enter your message*</label>
                <textarea
                  placeholder={message}
                  onChange={handleMessageChange}
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div
                className={
                  !isValid
                    ? "disable form-field f-button"
                    : "form-field f-button"
                }
              >
                <ContactButton
                  title={"Send email"}
                  onclick={
                    isValid
                      ? handleFormSubmit
                      : (e) => {
                          e.preventDefault();
                        }
                  }
                />
              </div>
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
      .disable {
        opacity: 0.3;
        cursor: hidden;
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
