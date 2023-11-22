import { Col, Row } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import './Definition.css';
import { useTranslation } from 'react-i18next';

function Definition(props) {

    const hiddenElement = useRef(null);
    const [t, i18n] = useTranslation("global")

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('show-news');
                    }, props.delay);
                }
            });
        });

        observer.observe(hiddenElement.current);
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <Row style={{}} className="m-0 p-4 border-bottom border-2 hidden-news flex-column flex-lg-row" ref={hiddenElement}>
            <Col className='col-12 col-lg-3 p-0'>
                <h5>{i18n.language === "es" ? props.titleEs : props.titleEn}</h5>
            </Col>
            <Col className="p-0">
                <p className="fs-6 text-wrap-balance">{i18n.language === "es" ? props.definitionEs : props.definitionEn}</p>
            </Col>
        </Row>
    )
}

export default Definition;