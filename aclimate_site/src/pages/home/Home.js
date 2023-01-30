import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import React, { useState, useEffect } from 'react';
import Map from '../../components/map/Map';

function Home() {

    const [currentSection, setCurrentSection] = useState(0);
    const sections = [...document.querySelectorAll('section')];
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight) {
            setCurrentSection((currentSection + 1) % sections.length);
            sections[currentSection].scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='container-page' style={{ scrollSnapType: "y mandatory" }}>
            <section className='main-content' >
                <Container className='m-0 p-0 d-flex align-items-center'>
                    <Row className="m-0 justify-content-center">
                        <Col className='col-9'>
                            <h1 className='text-center text-title-principal'>   ACLIMATE</h1>
                            <p className='font-link-body text-center p-subtitle'>
                                Quisque id mi quam. Donec interdum sapien elit, eu faucibus
                                orci viverra et. Quisque sed tortor nec nibh consequat
                                molestie. Donec non sapien eu elit cursus varius id quis
                                tellus. Integer semper ex sit amet lacus sagittis accumsan.
                                Nulla sollicitudin commodo consequat. Nam semper suscipit
                                urna id ornare. Duis tristique commodo nulla, at feugiat
                                nunc placerat at. Aenean vestibulum eros et dui suscipit,
                                sit amet ultrices erat eleifend. Pellentesque eget sapien
                                eget justo accumsan scelerisque ut id diam.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id='section2'>
                <Row className='m-0 align-items-center h-100'>
                    <Col>
                        <h2 className='text-center '>We are here</h2>
                        <p className='font-link-body text-center p-subtitle'>
                            Our work arrive in those countries making a great impact.
                        </p>
                    </Col>
                    <Col className='h-100'>
                        <Map></Map>
                    </Col>
                </Row>

            </section>
            <section >
                <p className='font-link-body text-center p-subtitle'>
                    Quisque id mi quam. Donec interdum sapien elit, eu faucibus
                    orci viverra et. Quisque sed tortor nec nibh consequat
                    molestie. Donec non sapien eu elit cursus varius id quis
                    tellus. Integer semper ex sit amet lacus sagittis accumsan.
                    Nulla sollicitudin commodo consequat. Nam semper suscipit
                    urna id ornare. Duis tristique commodo nulla, at feugiat
                    nunc placerat at. Aenean vestibulum eros et dui suscipit,
                    sit amet ultrices erat eleifend. Pellentesque eget sapien
                    eget justo accumsan scelerisque ut id diam.
                </p>
            </section>
        </div>
    );
}

export default Home;