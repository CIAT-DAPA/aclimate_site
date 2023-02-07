import { Col, Row } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import './New.css';
import { useTranslation } from 'react-i18next';

function New(props) {

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
        <a href={props.link} target="_blank" rel="noreferrer" className='link-news '>
            <Row style={{}} className="m-0 p-4 border-bottom border-2 my-3 hidden-news flex-column flex-lg-row" ref={hiddenElement}>
                <Col className='col-1'>
                    <p class="text-muted">{props.date}</p>
                </Col>
                <Col className="p-0">
                    <h5>{props.title}</h5>
                    <p className="fs-6">{i18n.language === "es" ? props.summaryEs : props.summaryEn}</p>
                </Col>
                {props.image && <Col className="align-self-center col-lg-4 col-xxl-3">
                    <img src={props.image} alt="" className="img-fluid" />
                </Col>}
            </Row>
        </a>
    )
}

export default New;