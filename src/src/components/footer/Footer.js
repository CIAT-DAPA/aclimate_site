import './Footer.css'

function Footer() {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center px-5 py-4" style={{
            backgroundColor: '#1d2718'
        }}>
            <p class="col-md-4 mb-0" style={{ color: '#fefae0' }}>CIAT All Rights reserved</p>

            <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><a href="mailto: J.R.Villegas@cgiar.org" class="nav-link px-2 text-decoration-none" style={{ color: '#fefae0' }}>Email: J.R.Villegas@cgiar.org </a></li>
            </ul>
        </footer>
    )
}

export default Footer;