import { Card } from 'react-bootstrap';
import React, { useEffect, useRef } from 'react';
import './Partner.css'

function Partner(props) {

    const hiddenElement = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('show-partner');
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

        <a href={props.partner.Link} target="_blank" className='partner hidden-partner' ref={hiddenElement}>
            <img class="img-partner " src={props.partner.Logo} alt={props.partner.Socio} />
        </a>

    )
}

export default Partner;