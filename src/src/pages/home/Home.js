import { Col, Container, Row, Modal } from "react-bootstrap";
import "./Home.css";
import React, { useEffect, useRef, useState } from "react";
import Map from "../../components/map/Map";
import line from "../../assets/svg/line.svg";
import julian from "../../assets/images/Julian.png";
import seasonalForecast from "../../assets/images/seasonalForecast.png";
import subseasonalForecast from "../../assets/images/subseasonalForecast.png";
import climateScenarios from "../../assets/images/climateScenario.png";
import cropSimulation from "../../assets/images/cropSimulation.png";
import bol1 from "../../assets/images/bol1.jpg";
import bol3 from "../../assets/images/bol3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import alliance from "../../assets/svg/alliance.svg";

function Home() {
  //Translation
  const [t, i18n] = useTranslation("global");

  //Google Analytics
  useEffect(() => {
    window.gtag("config", "G-89L0L1GCNH", {
      page_path: window.location.pathname,
    });
  }, []);

  //Dot scroll
  const handleClickNav = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const sectionBulletinRef = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisibleBulletin, setIsVisibleBulletin] = useState(false);

  const callbackFunction1 = (entries) => {
    const [entry] = entries;
    setIsVisible1(entry.isIntersecting);
  };
  const callbackFunction2 = (entries) => {
    const [entry] = entries;
    setIsVisible2(entry.isIntersecting);
  };
  const callbackFunction3 = (entries) => {
    const [entry] = entries;
    setIsVisible3(entry.isIntersecting);
  };
  const callbackFunction4 = (entries) => {
    const [entry] = entries;
    setIsVisible4(entry.isIntersecting);
  };
  const callbackFunctionBulletin = (entries) => {
    const [entry] = entries;
    setIsVisibleBulletin(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction1, options);
    if (section1Ref.current) observer.observe(section1Ref.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
    };
  }, [section1Ref, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction2, options);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => {
      if (section2Ref.current) observer.unobserve(section2Ref.current);
    };
  }, [section2Ref, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction3, options);
    if (section3Ref.current) observer.observe(section3Ref.current);

    return () => {
      if (section3Ref.current) observer.unobserve(section3Ref.current);
    };
  }, [section3Ref, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction4, options);
    if (section4Ref.current) observer.observe(section4Ref.current);

    return () => {
      if (section4Ref.current) observer.unobserve(section4Ref.current);
    };
  }, [section4Ref, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      callbackFunctionBulletin,
      options
    );
    if (sectionBulletinRef.current)
      observer.observe(sectionBulletinRef.current);

    return () => {
      if (sectionBulletinRef.current)
        observer.unobserve(sectionBulletinRef.current);
    };
  }, [sectionBulletinRef, options]);

  //Animation scroll

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      // else {
      //   entry.target.classList.remove('show');
      // }
    });
  });

  //Modal
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);

  const ModalSeasonal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="align-items-center justify-content-center">
            <Col xs={6} md={4} className="text-center">
              <img
                src={props.image}
                alt={props.title}
                className="img-fluid img-julian"
                style={{}}
              ></img>
            </Col>
            <Col xs={12} md={8}>
              <p className="text-wrap-balance">{props.description}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  };

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div className="container-page" style={{ scrollSnapType: "y mandatory" }}>
      <div className="dot-container">
        <div
          className={`dot ${isVisible1 ? "dot-active" : ""}`}
          id="1"
          onClick={() => handleClickNav("section-main")}
        ></div>
        <div
          className={`dot ${isVisible2 ? "dot-active" : ""}`}
          id="2"
          onClick={() => handleClickNav("section-content")}
        ></div>
        <div
          className={`dot ${isVisible3 ? "dot-active" : ""}`}
          id="3"
          onClick={() => handleClickNav("section-map")}
        ></div>
        <div
          className={`dot ${isVisibleBulletin ? "dot-active" : ""}`}
          id="bulletin"
          onClick={() => handleClickNav("section-bulletin")}
        ></div>
        <div
          className={`dot ${isVisible4 ? "dot-active" : ""}`}
          id="4"
          onClick={() => handleClickNav("section-contact")}
        ></div>
      </div>
      <section className="main-content" id="section-main" ref={section1Ref}>
        <Container className="m-0 p-0 d-flex align-items-center">
          <Row className="m-0 justify-content-center">
            <Col className="col-11 hidden box-description">
              <h1 className="text-center text-title-principal"> ACLIMATE</h1>
              <p className="font-link-body text-center p-subtitle text-wrap-balance">
                {t("home.introduction")}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <ModalSeasonal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
        title={t("home.content-seasonal")}
        description={t("home.seasonal-description")}
        image={seasonalForecast}
      />
      <ModalSeasonal
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        title={t("home.content-subseasonal")}
        description={t("home.subseasonal-description")}
        image={subseasonalForecast}
      />
      <ModalSeasonal
        show={modalShow3}
        onHide={() => setModalShow3(false)}
        title={t("home.content-climate")}
        description={t("home.climate-description")}
        image={climateScenarios}
      />
      <ModalSeasonal
        show={modalShow4}
        onHide={() => setModalShow4(false)}
        title={t("home.content-crop")}
        description={t("home.crop-description")}
        image={cropSimulation}
      />
      <section id="section-content" ref={section2Ref}>
        <Row className="pt-5">
          <Col className="justify-content-center d-flex hidden pt-5">
            <h1 className="hidden">
              <strong>{t("home.content-title")}</strong>
            </h1>
          </Col>
        </Row>
        <Row className="m-0 pt-md-3 mt-md-3 pt-xl-5 mt-xl-5">
          <Col
            className="align-items-center d-flex flex-column hidden col-12 col-md-6 col-xl-3 "
            onClick={() => setModalShow1(true)}
          >
            <img
              src={seasonalForecast}
              alt="Seasonal Forecast"
              className="img-fluid img-content"
              style={{}}
            ></img>
            <p className="hidden contact-2 item-content">
              <strong>{t("home.content-seasonal")}</strong>
            </p>
          </Col>
          <Col
            className="align-items-center d-flex flex-column hidden col-12 col-md-6 col-xl-3 "
            onClick={() => setModalShow2(true)}
          >
            <img
              src={subseasonalForecast}
              alt="Subseasonal Forecast"
              className="img-fluid img-content"
              style={{}}
            ></img>
            <p className="hidden contact-2 item-content">
              <strong>{t("home.content-subseasonal")}</strong>
            </p>
          </Col>
          <Col
            className="align-items-center d-flex flex-column hidden col-12 col-md-6 col-xl-3 "
            onClick={() => setModalShow3(true)}
          >
            <img
              src={climateScenarios}
              alt="Climate Scenarios"
              className="img-fluid img-content"
              style={{}}
            ></img>
            <p className="hidden contact-2 item-content">
              <strong>{t("home.content-climate")}</strong>
            </p>
          </Col>
          <Col
            className="align-items-center d-flex flex-column hidden col-12 col-md-6 col-xl-3 "
            onClick={() => setModalShow4(true)}
          >
            <img
              src={cropSimulation}
              alt="Crop Simulation"
              className="img-fluid img-content"
              style={{}}
            ></img>
            <p className="hidden contact-2 item-content">
              <strong>{t("home.content-crop")}</strong>
            </p>
          </Col>
        </Row>
      </section>

      <section id="section-map" ref={section3Ref}>
        <Row className="m-0 align-items-center h-100 flex-column flex-md-row">
          <Col className="align-items-center d-flex flex-column hidden justify-content-center">
            <h2 className="text-center ">{t("home.map-title")}</h2>
            <p className="font-link-body text-center p-subtitle text-wrap-balance">
              {t("home.map-text")}
            </p>
            <img
              src={line}
              alt="line decoration"
              className="img-fluid opacity-75"
              style={{ width: "260px", height: "40px" }}
            ></img>
          </Col>
          <Col className="h-100">
            <Map className=""></Map>
          </Col>
        </Row>
      </section>

      <section id="section-bulletin" ref={sectionBulletinRef}>
        <Row className="m-0 align-items-center h-100 flex-column flex-md-row">
          <Col className="align-items-center d-flex flex-column hidden justify-content-center col-12 col-md-6">
            <div
              className="position-relative d-flex justify-content-center align-items-center"
              style={{ width: "100%", height: "400px" }}
            >
              <img
                src={bol1}
                alt="Bulletin Platform 1"
                className="img-fluid shadow rounded"
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "15%",
                  width: "300px",
                  zIndex: 1,
                }}
              ></img>
              <img
                src={bol3}
                alt="Bulletin Platform 2"
                className="img-fluid shadow rounded"
                style={{
                  position: "absolute",
                  bottom: "5%",
                  right: "15%",
                  width: "300px",
                  zIndex: 2,
                }}
              ></img>
            </div>
          </Col>
          <Col className="align-items-center d-flex flex-column hidden justify-content-center col-12 col-md-6">
            <h1 className="text-center">{t("home.bulletin-title")}</h1>
            <p className="font-link-body text-center p-subtitle text-wrap-balance px-5 mb-0">
              {t("home.bulletin-description")}
            </p>
            <img
              src={line}
              alt="line decoration"
              className="img-fluid opacity-75 mb-3"
              style={{ width: "260px", height: "40px" }}
            ></img>
            <a
              className="mt-3 btn hidden contact-3 text-light"
              style={{ backgroundColor: "#c4661f", borderColor: "#c4661f" }}
              href="https://bulletin.aclimate.org/"
              target="_blank"
              rel="noreferrer"
            >
              {t("home.bulletin-button")}
            </a>
          </Col>
        </Row>
      </section>

      <section id="section-contact" ref={section4Ref}>
        <Row className="m-0 align-items-center h-100 flex-column flex-md-row">
          <Col className="d-flex flex-column align-items-center">
            <h1 className="hidden contact-1">{t("home.contact-title")}</h1>
            <p className="hidden contact-2">
              <strong>Julian Ramirez | </strong>
              <small>{t("home.contact-role")}</small>
            </p>
            <a
              className="hidden contact-3 text-decoration-none"
              style={{ color: "#fefae0" }}
              href="mailto: J.R.Villegas@cgiar.org"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Email:
              J.R.Villegas@cgiar.org
            </a>
            <img
              src={line}
              alt="line decoration"
              className="img-fluid  hidden contact-4"
              style={{ width: "260px", height: "40px" }}
            ></img>
            <img
              src={alliance}
              alt="alliance logo"
              className="img-fluid hidden"
              style={{ width: "280px" }}
            ></img>
          </Col>
          <Col className="align-items-center d-flex flex-column hidden justify-content-end">
            <img
              src={julian}
              alt="Julian"
              className="img-fluid img-julian"
              style={{}}
            ></img>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Home;
