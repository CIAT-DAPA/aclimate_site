import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
    const [t] = useTranslation("global");

    return (
        <footer
            className="d-flex flex-wrap justify-content-between align-items-center px-5 py-4"
            style={{
                backgroundColor: "#1d2718",
            }}
        >
            <p className="col-md-4 mb-0" style={{ color: "#fefae0" }}>
                {t("footer.rights")}
            </p>

            <ul className="nav col-md-8 justify-content-end">
                <li className="nav-item">
                    <Link
                        to="/data-policy"
                        className="nav-link px-2 text-decoration-none"
                        style={{ color: "#fefae0" }}
                    >
                        {t("footer.dataPolicy")}
                    </Link>
                </li>
                <li className="nav-item">
                    <a
                        href="mailto:J.R.Villegas@cgiar.org"
                        className="nav-link px-2 text-decoration-none"
                        style={{ color: "#fefae0" }}
                    >
                        {t("footer.email")}: J.R.Villegas@cgiar.org
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;