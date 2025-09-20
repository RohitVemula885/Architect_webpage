import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState("");

  // Strict email validation function
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) return false;
    const domain = email.split("@")[1];
    if (domain.includes("..") || domain.includes("--")) return false;
    return true;
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.form_email.value;
    if (!validateEmail(email)) {
      toast.error("Invalid email. Please correct it.", {
        position: "top-center",
        autoClose: 1300,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_zam9rwn",
        "template_5k9tk8i",
        form.current,
        "tcmpJ1_gapBerbUqZ"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Email has been sent successfully..!", {
            position: "top-center",
            autoClose: 1300,
          });
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send email..!", {
            position: "top-center",
            autoClose: 1300,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="d-flex align-items-center bg-light"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=863&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-4 fw-bold" style={{ color: "white" }}>
          CONTACT ME
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-4 bg-white rounded shadow"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <input
            type="text"
            name="form_name"
            placeholder="Your Name"
            className="form-control mb-3"
            required
          />
          <input
            type="email"
            name="form_email"
            placeholder="Your Email"
            className={`form-control mb-1 ${
              emailError ? "is-invalid" : form.current?.form_email.value ? "is-valid" : ""
            }`}
            onChange={handleEmailChange}
            required
          />
          {emailError && (
            <div className="invalid-feedback d-block">{emailError}</div>
          )}
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-control mb-3"
            rows="5"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!!emailError} 
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
