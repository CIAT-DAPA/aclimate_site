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


    const [opacity, setOpacity] = useState(1);

    const changeNavbarOpacity = () => {
        if (window.scrollY >= 80) {
            setOpacity(0.3);
        }
        else {
            setOpacity(1);
        }
    };

    window.addEventListener('scroll', changeNavbarOpacity);

    return (
        <Navbar variant="dark" collapseOnSelect expand="lg" style={{
            opacity: `${opacity}`
        }} className='position-fixed w-100 menu p-0' >
            <Container className='py-1'>
                <Link className="navbar-brand" to="/">Aclimate</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                    <Nav className="justify-content-end">
                        <Link className="nav-link" to="/news" >{t("menu.news")}</Link>
                        <Link className="nav-link" to="/articles" >{t("menu.articles")}</Link>
                        <Link className="nav-link" to="/partners " >{t("menu.partners")}</Link>
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Menu;