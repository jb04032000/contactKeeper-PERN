import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <div className="d-flex flex-column justify-content-center shadow py-4 px-4 ">
      <div className="fs-3 fw-bold mb-4 h2 m-auto">Add Contact</div>
      <Form className="fw-bold" onSubmit={null}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="email"
            // onChange={onChange}
            // value={name}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            // onChange={onChange}
            // value={email}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone number"
            name="phone"
            // onChange={onChange}
            // value={phone}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact type</Form.Label>
          <br />
          <Form.Check
            defaultChecked
            inline
            label="Personal"
            name="group1"
            type="radio"
            id="Personal"
          />
          <Form.Check
            inline
            label="Professional"
            name="group1"
            type="radio"
            id="Professional"
          />
        </Form.Group>

        <Button variant="info" type="submit">
          Add Contact
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
