import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/footer/Footer";
import "./DataPolicy.css";

function DataPolicy() {
  const [t] = useTranslation("global");

  const section1Items = [
    t("dataPolicy.section1.item1"),
    t("dataPolicy.section1.item2"),
    t("dataPolicy.section1.item3"),
    t("dataPolicy.section1.item4"),
  ];

  const section2Items = [
    t("dataPolicy.section2.item1"),
    t("dataPolicy.section2.item2"),
    t("dataPolicy.section2.item3"),
    t("dataPolicy.section2.item4"),
  ];

  const section5Items = [
    t("dataPolicy.section5.item1"),
    t("dataPolicy.section5.item2"),
    t("dataPolicy.section5.item3"),
    t("dataPolicy.section5.item4"),
  ];

  const section7Items = [
    t("dataPolicy.section7.item1"),
    t("dataPolicy.section7.item2"),
    t("dataPolicy.section7.item3"),
  ];

  return (
    <div>
      <div className="mb-4 text-white data-policy-title">
        <div className="container pb-3 px-4 data-policy-title-container">
          <div className="col-md-10 px-0">
            <h1 className="display-4">{t("dataPolicy.title")}</h1>
            <p className="lead mb-0">{t("dataPolicy.subtitle")}</p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-5">
        <article>
          <p>{t("dataPolicy.intro1")}</p>
          <p>{t("dataPolicy.intro2")}</p>

          <section className="data-policy-section">
            <h2>{t("dataPolicy.section1.title")}</h2>
            <p>{t("dataPolicy.section1.intro")}</p>
            <ul>
              {section1Items.map((item, index) => (
                <li key={`s1-${index}`}>{item}</li>
              ))}
            </ul>
            <p>{t("dataPolicy.section1.outro")}</p>
          </section>

          <section className="data-policy-section">
            <h2>{t("dataPolicy.section2.title")}</h2>
            <p>{t("dataPolicy.section2.intro")}</p>
            <ul>
              {section2Items.map((item, index) => (
                <li key={`s2-${index}`}>{item}</li>
              ))}
            </ul>
            <p>{t("dataPolicy.section2.outro")}</p>
          </section>

          <section className="data-policy-section">
            <h2>{t("dataPolicy.section3.title")}</h2>
            <p>{t("dataPolicy.section3.body")}</p>
          </section>

          <section className="data-policy-section">
            <h2>{t("dataPolicy.section4.title")}</h2>
            <p>{t("dataPolicy.section4.body")}</p>
          </section>

          <section className="data-policy-section">
            <h2>{t("dataPolicy.section5.title")}</h2>
            <p>{t("dataPolicy.section5.intro")}</p>
            <ul>
              {section5Items.map((item, index) => (
                <li key={`s5-${index}`}>{item}</li>
              ))}
            </ul>
            <p>{t("dataPolicy.section5.contactIntro")}</p>
            <address className="data-policy-address">
              <a href="mailto:h.sotelo@cgiar.org">h.sotelo@cgiar.org</a>
              <br />
              {t("dataPolicy.section5.contactOrg")}
              <br />
              {t("dataPolicy.section5.contactAddress")}
            </address>
          </section>

          <section className="data-policy-section">
            <h2>{t("dataPolicy.section6.title")}</h2>
            <p>{t("dataPolicy.section6.body")}</p>
          </section>

          <section className="data-policy-section">
            <h2>{t("dataPolicy.section7.title")}</h2>
            <p>{t("dataPolicy.section7.intro")}</p>
            <ul>
              {section7Items.map((item, index) => (
                <li key={`s7-${index}`}>{item}</li>
              ))}
            </ul>
          </section>
        </article>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default DataPolicy;
