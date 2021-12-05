import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [fromNumber, setFromNumber] = useState("");
  const [fromMessage, setFromMessage] = useState("");

  const onInputChange = (e, from) => {
    switch (from) {
      case "name":
        return setFromName(e.target.value);
      case "email":
        return setFromEmail(e.target.value);
      case "address":
        return setFromAddress(e.target.value);
      case "number":
        return setFromNumber(e.target.value);
      case "message":
        return setFromMessage(e.target.value);
      default:
        return "";
    }
  };

  const sendEmail = (e) => {
    toast.info("Mail Is Being Sent !", {
      position: toast.POSITION.TOP_CENTER,
    });
    e.preventDefault();
    var message = `${fromMessage} ==> 
                    Sent By: ${fromName}  , 
                    Contact Email: ${fromEmail}   , 
                    Contact Number: ${fromNumber}    ,
                    Cntact Address: ${fromAddress}    ,
                  `;
    emailjs
      .send(
        "service_odr8hdt",
        "template_wfuy1ff",
        {
          from_name: fromName,
          message: message,
          from_email: fromName,
        },
        "user_6IIXAOjuEkopi65FoBKgQ"
      )
      .then(
        (result) => {
          toast.success("Mail Sent !", {
            position: toast.POSITION.TOP_CENTER,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error Sending Mail !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };

  return (
    <div>
      <Container>
        <Form onSubmit={sendEmail}>
          <Form.Group controlId="form.Name">
            <Form.Label>From</Form.Label>
            <Form.Control
              required
              type="text"
              name="from_name"
              placeholder="Enter your name"
              onChange={(e) => onInputChange(e, "name")}
            />
          </Form.Group>
          <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="from_email"
              placeholder="Enter your email address"
              onChange={(e) => onInputChange(e, "email")}
            />
          </Form.Group>
          <Form.Group controlId="form.Number">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              required
              type="number"
              name="number"
              placeholder="Enter your contact number"
              onChange={(e) => onInputChange(e, "number")}
            />
          </Form.Group>
          <Form.Group controlId="form.Address">
            <Form.Label>Contact Address</Form.Label>
            <Form.Control
              required
              type="text"
              name="address"
              placeholder="Enter your contact address"
              onChange={(e) => onInputChange(e, "address")}
            />
          </Form.Group>
          <Form.Group controlId="form.Textarea">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={4}
              onChange={(e) => onInputChange(e, "message")}
            />
          </Form.Group>
          <Form.Group controlId="form.To">
            <div class="alert alert-dark" role="alert">
              This message will be sent to Dubaimoz Team!
            </div>
          </Form.Group>
          <Form.Group controlId="form.Send">
            <Button variant="primary" type="submit">
              Send
            </Button>{" "}
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
