import './App.css';
// import { Routes, Route } from 'react-router-dom';
import './styles/header.css';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Main from './components/Main';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <nav>
        <div className="header">
          <p className="left">Brigham Broadbent</p>
          <a className="icons" href="#skills">Skills</a>
          <a className="icons" href="#projects">Projects</a>
          <a className="icons" href="#contact">Contact</a>
        </div>
      </nav>
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
