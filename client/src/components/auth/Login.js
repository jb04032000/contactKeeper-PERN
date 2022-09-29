import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div className="container d-flex  justify-content-center align-items-center mt-5">
      <div className="shadow p-5 d-flex flex-column justify-content-center align-items-center">
        <div className="fs-3 fw-bold mb-4">Login</div>
        <Form className="fw-bold">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              minLength={8}
            />
          </Form.Group>

          <Button variant="info" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
