import './App.css';
import './styles/header.css';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Main from './components/Main';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="header">
          <p className="left">Brigham Broadbent</p>
          <a className="icons" href="#skills">Skills</a>
          <a className="icons" href="#projects">Projects</a>
        </div>
      </nav>
      <Main />
      <Skills />
      <Projects />
      <Footer />
    </div >
  );
}

export default App;
