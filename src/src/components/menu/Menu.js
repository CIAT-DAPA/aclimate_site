import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

function Menu() {

    return (

        <Navbar variant="dark" className='position-fixed w-100 menu p-0'>
            <Container className='py-1'>
                <Link className="navbar-brand" to="/">Aclimate</Link>
                <Nav className="justify-content-end">
                    <Link className="nav-link" to="/Partners " >Partners</Link>
                    {/* <Link className="nav-link" to="/" >Experiences</Link> Change to News */}
                    {/* <Link className="nav-link" to="/Publications" >Publications</Link> */}
                    <a className='nav-link' href='https://docs.aclimate.org/en/latest/' target="_blank" rel="noreferrer">Documentation</a>
                    <Link className="nav-link" to="/News" >News</Link>
                    <Dropdown as={ButtonGroup}>
                        <Button>EN</Button>

                        <Dropdown.Toggle split id="dropdown-split-basic" />

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">ES</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">EN</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>

    );
}

export default Menu;