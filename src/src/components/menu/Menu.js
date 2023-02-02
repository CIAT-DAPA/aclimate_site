import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {

    return (

        <Navbar variant="dark" className='position-fixed w-100 menu p-0'>
            <Container className='py-1'>
                <Link className="navbar-brand" to="/">Aclimate</Link>
                <Nav className="justify-content-end">
                    {/* <Link className="nav-link" to="/Partners " >Partners</Link> */}
                    {/* <Link className="nav-link" to="/" >Experiences</Link> Change to News */}
                    {/* <Link className="nav-link" to="/Publications" >Publications</Link> */}
                    <Link className="nav-link" to="/News" >News</Link>
                </Nav>
            </Container>
        </Navbar>

    );
}

export default Menu;