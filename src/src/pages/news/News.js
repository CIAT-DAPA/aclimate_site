import "./News.css";
import Logo from "../../assets/images/logo.png";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import New from "../../components/new/New";

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
        <New key={index} image={Logo} title={e.Titulo} date={e.Fecha} summary={e.Resumen} link={e.Link} />
      ))}
    </div>
  );
}

export default News;
