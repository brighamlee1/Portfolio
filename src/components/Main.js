import '../styles/main.css'

function Main() {
    return (
        <div className="main-container" id="home">
            <div className="left-main-box">
                <h2 className="title">Software Developer</h2>
                <h1 className="name">Brigham Broadbent</h1>
                <p className="about-me">Hello! I am a Full Stack Software Developer with over 2 years of experience and enjoy creating clean and functional web applications.</p>
            </div>
            <div className="main-image-box">
                <img className="main-image" src="https://ca.slack-edge.com/T022C3JHT41-U0702DVNQRY-a3baa4e3b1e2-512" alt="" />
            </div>
        </div>
    );
}

export default Main;
