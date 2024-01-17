import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Components/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Container className="align-items-center p-3">
          <Card
            bg="dark"
            variant="dark"
            text="light"
            style={{
              borderRadius: "25px",
              overflow: "hidden",
            }}
          >
            {/* Card Header */}
            <CardHeader>
              <NavigationBar />
            </CardHeader>

            {/* Card Body */}
            <CardBody>
              <Row className="p-3">
                <Col xs="12" md="3" className="text-center mb-3">
                  {/* <Image src="hasan-2.png" roundedCircle fluid /> */}
                  <Image
                    src="hasan.jpeg"
                    roundedCircle
                    fluid
                    alt="abdullah"
                    width="75%"
                  />
                </Col>

                <Col xs="12" md="9">
                  <AppRoutes />
                </Col>
              </Row>
            </CardBody>

            {/* Card Footer */}
            <CardFooter>

            </CardFooter>
          </Card>
        </Container>
      </Router>
    </>
  );
}

export default App;
