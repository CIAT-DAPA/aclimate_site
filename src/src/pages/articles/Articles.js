import "./Articles.css";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { useTranslation } from "react-i18next";
import New from "../../components/new/New";
import Footer from "../../components/footer/Footer";

const URL_NEWS_DATA =
  "https://raw.githubusercontent.com/CIAT-DAPA/aclimate_site/main/data/articles.csv";

function Articles() {
  const [t, i18n] = useTranslation("global");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Papa.parse(URL_NEWS_DATA, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setArticles(results.data);
      },
    });
  }, []);

  return (
    <div>
      <div className="mb-4 text-white bg-title">
        <div className="container pb-3 px-4 container-news" style={{}}>
          <div className="col-md-6 px-0">
            <h1 className="display-4">{t("articles.articles-title")}</h1>
          </div>
        </div>
      </div>
      {articles
        .sort((a, b) => {
          const [dayA, monthA, yearA] = a.Fecha.split("/").map(Number);
          const [dayB, monthB, yearB] = b.Fecha.split("/").map(Number);
          return (
            new Date(yearB, monthB - 1, dayB) -
            new Date(yearA, monthA - 1, dayA)
          );
        })
        .map((e, index) => (
          <New
            key={index}
            title={e.Titulo}
            date={e.Fecha}
            summaryEs={e.ResumenEs}
            summaryEn={e.ResumenEn}
            link={e.Link}
            delay={index * 100}
          />
        ))}
      <Footer></Footer>
    </div>
  );
}

export default Articles;
