import React from "react";
import IconText from "./IconText";
import emailjs from "emailjs-com";
import Button from "elements/Button";
import { FormLabel, FormControl, FormGroup, Form } from "react-bootstrap";
import JabatTangan from "assets/images/JabatTangan1.png";

export default function Footer() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "Fortofolio_ID",
        e.target,
        "user_NczgRN9CPVszjKvcnLd6n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <footer className="container-fluid" id="Contact">
      <div className="row row-cols-2">
        <form onSubmit={sendEmail}>
          <div className="label-contact">
            <p>
              <span>Wanna build some website?</span>
              <br />{" "}
              <span className="text-center please-fill">
                Please fill out this form{" "}
              </span>
            </p>
          </div>
          <div className="container container-contact">
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="text"
                placeholder="Ridho Hayatu|"
                name="name"
              />
            </FormGroup>

            <FormGroup controlId="formBasicPassword">
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                placeholder="email@gmail.com"
                name="email"
              />
            </FormGroup>

            <FormGroup controlId="formBasicEmail">
              <FormLabel>Subject</FormLabel>
              <FormControl
                type="text"
                placeholder="Please Type Here..."
                name="subject"
              />
            </FormGroup>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                cols={30}
                id="message"
                name="message"
              />
            </Form.Group>
            <Button type="submit" className="btn tombol">
              Send Message
            </Button>
          </div>
        </form>
        <div className="col-5">
          <div className="futer-img">
            <img
              src={JabatTangan}
              alt="Jaba Tangan"
              className="img-fluid w-75"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
