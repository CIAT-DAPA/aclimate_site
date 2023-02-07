import "./News.css";
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

  return (
    <div>
      <div className="mb-4 text-white bg-title">
        <div className="container pb-3 px-4 container-news" style={{}}>
          <div className="col-md-6 px-0">
            <h1 className="display-4">
              News about Aclimate
            </h1>
          </div>
        </div>
      </div>
      {
        news
          .sort((a, b) => new Date(b.Fecha) - new Date(a.Fecha))
          .map((e, index) => (
            <New key={index} image={e.Image} title={e.Titulo} date={e.Fecha} summaryEs={e.ResumenEs} summaryEn={e.ResumenEn} link={e.Link} delay={index * 100} />
          ))
      }
    </div >
  );
}

export default News;
