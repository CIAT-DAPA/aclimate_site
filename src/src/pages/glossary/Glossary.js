import Papa from "papaparse";
import { useTranslation } from "react-i18next"
import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import "./Glossary.css"
import Definition from "../../components/definition/Definition";
import { Col, Row } from "react-bootstrap";

const URL_GLOSSARY_DATA =
    "https://raw.githubusercontent.com/CIAT-DAPA/aclimate_site/main/data/glossary.csv";

function Glossary() {
    const [t, i18n] = useTranslation("global")
    const [definitions, setDefinitions] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        Papa.parse(URL_GLOSSARY_DATA, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                setDefinitions(results.data);
            },
        });
    }, []);

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    function removeAccents(str) {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    return (
        <div>
            <div className="mb-4 text-white bg-title">
                <div className="container pb-3 px-4 container-news" style={{}}>
                    <div className="col-md-6 px-0">
                        <h1 className="display-4">
                            {t("glossary.glossary-title")}
                        </h1>
                    </div>
                </div>
            </div>
            <Row className="m-0 pe-2">
                <Col className="col-12">
                    <input type="search" className="form-control ms-2" placeholder="Search..." aria-label="Search" onChange={handleSearchInputChange} value={searchValue} />
                </Col>
            </Row>
            {

                definitions
                    .filter((item) => {
                        if (searchValue === "")
                            return true
                        const normalizedSearchValue = removeAccents(searchValue);
                        let normalizedTitle;
                        if (i18n.language === "es") {
                            normalizedTitle = removeAccents(item.TituloEs);
                        } else {
                            normalizedTitle = removeAccents(item.TituloEn);
                        }
                        return normalizedTitle.includes(normalizedSearchValue);
                    })
                    .sort((a, b) => {
                        if (i18n.language === "es") {
                            if (a.TituloEs < b.TituloEs) return -1;
                            if (a.TituloEs > b.TituloEs) return 1;
                            return 0;
                        } else {
                            if (a.TituloEn < b.TituloEn) return -1;
                            if (a.TituloEn > b.TituloEn) return 1;
                            return 0;
                        }
                    })
                    .map((e, index) => (
                        <Definition key={index} titleEs={e.TituloEs} titleEn={e.TituloEn} definitionEs={e.DefinicionEs} definitionEn={e.DefinicionEn} delay={index * 100} />
                    ))
            }
            <Footer></Footer>
        </div >
    )
}

export default Glossary;