import '../styles/main.css'
// import { Typewriter, useTypewriter } from 'react-simple-typewriter'

function Main() {

    // const typewriter =
    //     <Typewriter
    //         loop={0 | false}
    //         cursor
    //         cursorStyle='_'
    //         typeSpeed={80}
    //         deleteSpeed={60}
    //         delaySpeed={1000}
    //         words={['Software Developer', 'Web Developer', 'Full-stack Developer']}
    //     />

    return (
        <div className="main-container" id="home">
            <div className="left-main-box">
                <h2 className="title">Software Developer</h2>
                <h1 className="name">Brigham Broadbent</h1>
                <p className="about-me">Hello! When I am not coding, I enjoy playing basketball, spending time with my girlfriend and family, and driving cars. When I am coding, I really enjoy creating functional and great looking web applications.</p>
            </div>
            <div className="main-image-box">
                <img className="main-image" src="https://user-images.githubusercontent.com/91819733/171185855-98f05be7-351b-4ada-9480-8f59ab1d7d9c.jpg" alt="" />
            </div>
        </div>
    );
}

export default Main;
