import "./News.css";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/images/logo.png";
import { Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const URL_NEWS_DATA =
  "https://raw.githubusercontent.com/CIAT-DAPA/aclimate_site/main/data/news.csv";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    Papa.parse(URL_NEWS_DATA, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setNews(results.data);
      },
    });
  }, []);

  console.log(news);

  return (
    <div>
      <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4">
            News about Aclimate
          </h1>
        </div>
      </div>
      {news.map((e, index) => (
        <Row style={{ height: "10rem" }} key={index} className="m-0 px-4">
          <Col className="h-100 col-2">
            <img src={Logo} className="img-fluid h-100" />
          </Col>
          <Col className="p-0">
            <h5>{e.Titulo}</h5>
            <p class="text-muted">Date: {e.Fecha}</p>
            <p className="fs-6">{e.Resumen}</p>
            <Button variant="primary" href={e.Link} target="_blank">
              Go to article
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default News;
