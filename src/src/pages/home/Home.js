import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import React, {useEffect, useRef, useState} from "react";
import Map from "../../components/map/Map";
import line from "../../assets/svg/line.svg";
import person from "../../assets/images/catTemp.png";

function Home() {
  const handleClickNav = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    var idname = id.split("-");
    if (id == "section-1") {
      document.getElementById(1).classList.add("dot-active");
      document.getElementById(2).classList.remove("dot-active");
      document.getElementById(3).classList.remove("dot-active");
    }
    if (id == "section-2") {
      document.getElementById(1).classList.remove("dot-active");
      document.getElementById(2).classList.add("dot-active");
      document.getElementById(3).classList.remove("dot-active");
    }
    if (id == "section-3") {
      document.getElementById(1).classList.remove("dot-active");
      document.getElementById(2).classList.remove("dot-active");
      document.getElementById(3).classList.add("dot-active");
    }
  };

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)

  const callbackFunction1 = (entries) => {
    const [entry] = entries;
    setIsVisible1(entry.isIntersecting)
  }
  const callbackFunction2 = (entries) => {
    const [entry] = entries;
    setIsVisible2(entry.isIntersecting)
  }
  const callbackFunction3 = (entries) => {
    const [entry] = entries;
    setIsVisible3(entry.isIntersecting)
  }

  const options = {
    root:null,
    rootMargin: "0px",
    threshold:1.0
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction1, options);
    if (section1Ref.current) observer.observe(section1Ref.current)

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current)
    }
  }, [section1Ref, options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction2, options);
    if (section2Ref.current) observer.observe(section2Ref.current)

    return () => {
      if (section2Ref.current) observer.unobserve(section2Ref.current)
    }
  }, [section2Ref, options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction3, options);
    if (section3Ref.current) observer.observe(section3Ref.current)

    return () => {
      if (section3Ref.current) observer.unobserve(section3Ref.current)
    }
  }, [section3Ref, options])


  return (
    <div className="container-page" style={{ scrollSnapType: "y mandatory" }}>
      <div className="dot-container">
        <div
          className={`dot ${isVisible1 ? "dot-active" : ""}`}
          id="1"
          onClick={() => handleClickNav("section-1")}
        ></div>
        <div
          className={`dot ${isVisible2 ? "dot-active" : ""}`}
          id="2"
          onClick={() => handleClickNav("section-2")}
        ></div>
        <div
          className={`dot ${isVisible3 ? "dot-active" : ""}`}
          id="3"
          onClick={() => handleClickNav("section-3")}
        ></div>
      </div>
      <section className="main-content" id="section-1" ref={section1Ref}>
        <Container className="m-0 p-0 d-flex align-items-center">
          <Row className="m-0 justify-content-center">
            <Col className="col-11">
              <h1 className="text-center text-title-principal"> ACLIMATE</h1>
              <p className="font-link-body text-center p-subtitle">
                Quisque id mi quam. Donec interdum sapien elit, eu faucibus orci
                viverra et. Quisque sed tortor nec nibh consequat molestie.
                Donec non sapien eu elit cursus varius id quis tellus. Integer
                semper ex sit amet lacus sagittis accumsan. Nulla sollicitudin
                commodo consequat. Nam semper suscipit urna id ornare. Duis
                tristique commodo nulla, at feugiat nunc placerat at. Aenean
                vestibulum eros et dui suscipit, sit amet ultrices erat
                eleifend. Pellentesque eget sapien eget justo accumsan
                scelerisque ut id diam.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="section-2" ref={section2Ref}>
        <Row className="m-0 align-items-center h-100">
          <Col className="align-items-center d-flex flex-column">
            <h2 className="text-center ">We are here</h2>
            <p className="font-link-body text-center p-subtitle">
              Quisque id mi quam. Donec interdum sapien elit, eu faucibus orci
              viverra et. Quisque sed tortor nec nibh consequat molestie. Donec
              non sapien eu elit cursus varius id quis tellus.
            </p>
            <br />
            <img src={line} className="img-fluid w-75" style={{}}></img>
          </Col>
          <Col className="h-100">
            <Map></Map>
          </Col>
        </Row>
      </section>
      <section id="section-3" ref={section3Ref}>
        <Row className="m-0 align-items-center h-100">
          <Col className="align-items-center d-flex flex-column ">
            <img src={person} className="img-fluid w-50" style={{}}></img>
            <h3 className="text-center mt-4">Julian Ramirez</h3>
          </Col>
          <Col className="align-items-center d-flex flex-column">
            <h2 className="text-center ">Contact us</h2>
            <p className="font-link-body text-center p-subtitle">
              Our mission is at feugiat nunc placerat at. Aenean vestibulum eros
              et dui suscipit, sit amet ultrices erat eleifend. Pellentesque
              eget sapien eget justo accumsan scelerisque ut id diam.
            </p>
            <p className="font-link-body text-center p-subtitle">
              Email: dasfasdad@cgiar.org
            </p>
            <br />
            <img src={line} className="img-fluid w-75" style={{}}></img>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Home;
