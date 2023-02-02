import "./News.css";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/images/logo.png";
import { Col, Row } from "react-bootstrap";

function News() {
  return (
    <Row style={{ height: "10rem" }}>
      <Col className="h-100 col-2">
        <img src={Logo} className="img-fluid h-100" />
      </Col>
      <Col>
        <h5>Card Title</h5>
        <p class="text-muted">Date: 26/03/2021</p>
        <p className="fs-6">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button variant="primary">Go to article</Button>
      </Col>
    </Row>
  );
}

export default News;
