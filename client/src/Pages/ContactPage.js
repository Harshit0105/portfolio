import React from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import styled from "styled-components";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
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
                <input type="text" id="name"></input>
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" id="email"></input>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject*</label>
                <input type="text" id="subject"></input>
              </div>
              <div className="form-field">
                <label htmlFor="textarea">Enter your message*</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title={"Send email"} />
              </div>
            </form>
          </div>
          <div className="right-section">
            <ContactItem
              icon={phone}
              title={"Phone"}
              contact1={"+919904825833"}
              contact2={"+917227001574"}
            />
            <ContactItem
              icon={email}
              title={"Email"}
              contact1={"harshit010501@gmail.com"}
              contact2={""}
            />
            <ContactItem
              icon={location}
              title={"Address"}
              contact1={"25-'Yogi Kunj', Sajan-nagar"}
              contact2={"Una-362560, Gujarat, India"}
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
