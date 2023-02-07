import "./Articles.css";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { useTranslation } from "react-i18next"
import New from "../../components/new/New";

const URL_NEWS_DATA =
    "https://raw.githubusercontent.com/CIAT-DAPA/aclimate_site/main/data/articles.csv";


function Articles() {

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
                        <h1 className="display-4">
                            Articles about Aclimate
                        </h1>
                    </div>
                </div>
            </div>
            {
                articles
                    .sort((a, b) => new Date(b.Fecha) - new Date(a.Fecha))
                    .map((e, index) => (
                        <New key={index} title={e.Titulo} date={e.Fecha} summaryEs={e.ResumenEs} summaryEn={e.ResumenEn} link={e.Link} delay={index * 100} />
                    ))
            }
        </div >
    )
}

export default Articles;