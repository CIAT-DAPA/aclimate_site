import { Button, Col, Row } from 'react-bootstrap';
import './New.css';

function New(props) {

    return (
        <Row style={{ height: "10rem" }} className="m-0 px-4 border-bottom border-2 my-3">
            <Col className="h-100 col-2">
                <img src={props.image} alt="" className="img-fluid h-100" />
            </Col>
            <Col className="p-0">
                <h5>{props.title}</h5>
                <p class="text-muted">Date: {props.date}</p>
                <p className="fs-6">{props.summary}</p>
                <Button variant="primary" href={props.link} target="_blank">
                    Go to article
                </Button>
            </Col>
        </Row>
    )
}

export default New;