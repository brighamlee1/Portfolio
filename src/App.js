import './App.css';
// import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Main from './components/Main';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
