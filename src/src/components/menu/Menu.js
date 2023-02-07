import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from "react";

function Menu() {

    const [t, i18n] = useTranslation("global")
    const [language, setLanguage] = useState(
        window.localStorage.getItem("language") || "es"
    );

    useEffect(() => {
        window.localStorage.setItem("language", language);
        i18n.changeLanguage(language);
    }, [language, i18n]);

    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    return (

        <Navbar variant="dark" className='position-fixed w-100 menu p-0'>
            <Container className='py-1'>
                <Link className="navbar-brand" to="/">Aclimate</Link>
                <Nav className="justify-content-end">
                    <Link className="nav-link" to="/News" >{t("menu.news")}</Link>
                    <Link className="nav-link" to="/Articles" >{t("menu.articles")}</Link>
                    <Link className="nav-link" to="/Partners " >{t("menu.partners")}</Link>
                    <a className='nav-link' href='https://docs.aclimate.org/en/latest/' target="_blank" rel="noreferrer">{t("menu.documentation")}</a>

                    <Dropdown as={ButtonGroup}>
                        <Button variant='outline-secondary' className='text-uppercase disabled'>{window.localStorage.getItem("language") || "es"}</Button>

                        <Dropdown.Toggle variant='outline-secondary' split id="dropdown-split-basic" />

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleLanguageChange("es")}>ES</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleLanguageChange("en")}>EN</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>

    );
}

export default Menu;