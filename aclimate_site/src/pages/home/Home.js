import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';

function Home() {
    const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 5, delay: 2 });

    return (
        <div className='container-page' ref={scrollRef}>
            <section className='main-content'>
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
            <section>
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