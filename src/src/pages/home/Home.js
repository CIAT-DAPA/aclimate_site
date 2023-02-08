import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import React, { useEffect, useRef, useState } from "react";
import Map from "../../components/map/Map";
import line from "../../assets/svg/line.svg";
import julian from "../../assets/images/Julian.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next"

function Home() {

  //Translation
  const [t, i18n] = useTranslation("global");

  //Google Analytics
  useEffect(() => {
    window.gtag('config', 'G-89L0L1GCNH', {
      page_path: window.location.pathname,
    });
  }, []);


  //Dot scroll
  const handleClickNav = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    if (id === "section-1") {
      document.getElementById(1).classList.add("dot-active");
      document.getElementById(2).classList.remove("dot-active");
      document.getElementById(3).classList.remove("dot-active");
    }
    if (id === "section-2") {
      document.getElementById(1).classList.remove("dot-active");
      document.getElementById(2).classList.add("dot-active");
      document.getElementById(3).classList.remove("dot-active");
    }
    if (id === "section-3") {
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
    root: null,
    rootMargin: "0px",
    threshold: 1.0
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


  //Animation scroll

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      // else {
      //   entry.target.classList.remove('show');
      // }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

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
            <Col className="col-11 hidden">
              <h1 className="text-center text-title-principal"> ACLIMATE</h1>
              <p className="font-link-body text-center p-subtitle">
                {t("home.introduction")}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="section-2" ref={section2Ref}>
        <Row className="m-0 align-items-center h-100">
          <Col className="align-items-center d-flex flex-column hidden" >

            <h2 className="text-center ">{t("home.map-title")}</h2>
            <p className="font-link-body text-center p-subtitle">
              {t("home.map-text")}
            </p>
            <img src={line} alt="line decoration" className="img-fluid opacity-75" style={{ width: "260px", height: "40px" }}></img>


          </Col>
          <Col className="h-100">
            <Map className=""></Map>
          </Col>
        </Row>
      </section>
      <section id="section-3" ref={section3Ref}>
        <Row className="m-0 align-items-center h-100">
          <Col className="align-items-center d-flex flex-column hidden">
            <img src={julian} alt="Julian" className="img-fluid w-75" style={{}}></img>
          </Col>
          <Col>
            <h1 className="hidden contact-1">{t("home.contact-title")}</h1>
            <p className="hidden contact-2"><strong>Julian Ramirez | </strong><small>{t("home.contact-role")}</small></p>
            <a className="hidden contact-3 text-decoration-none text-light" href="mailto: J.R.Villegas@cgiar.org">
              <FontAwesomeIcon icon={faEnvelope} /> Email: J.R.Villegas@cgiar.org
            </a>

          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Home;
