import '../styles/footer.css'

function Footer() {
    return (
        <div className="footer">
            <ul className="footer-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-buttons">
                <a href="https://linkedin.com/in/brigham-broadbent" target="_blank" rel="noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/brighamlee1"target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    )
}

export default Footer;