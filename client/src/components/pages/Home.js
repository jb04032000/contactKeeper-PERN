import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { loadUserRequested } from "../../redux/slices/authSlice";
import { getContactListRequested } from "../../redux/slices/contactSlice";
import ContactForm from "../contacts/ContactForm";
import { Card } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserRequested());
    dispatch(getContactListRequested());
  }, []);
  return (
    <div className="container pt-5 vw-100 vh-100 overflow-hidden">
      <Row className="py-2 px-2 gx-5 gy-3 d-flex justify-content-evenly">
        <Col sm={12} lg={4}>
          <ContactForm />
        </Col>

        <Col sm={12} lg={4} className="d-flex justify-content-center">
          <div>
            <Card className="shadow border-0" style={{ width: 400 }}>
              <Card.Header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span className="fw-bold">Om</span>
                <span className="badge bg-warning text-dark text-capitalize">
                  Proffesional
                </span>
                {/* <span className="badge bg-danger text-capitalize">Personal</span> */}
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <div>
                    <i className="fas fa-envelope-open text-info me-3" />
                    om@om.om
                  </div>
                  <div>
                    <i className="fas fa-phone text-info me-3" />
                    77744558964
                  </div>
                </Card.Text>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button variant="dark">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
