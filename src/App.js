import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Particles from 'react-particles-js'; 
import Navbar from './components/Navbar';
import Header from './components/Header'; 
import AboutMe from './components/AboutMe'; 
import Skills from './components/Skills'; 
import Experience from './components/Experience'; 
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact'; 

function App() {
  return (
    <>
    {/* little floaty things */}
    <Particles
    className='particles-canvas'
    params= {{
      particles: {
        number: {
          value: 30, 
          density: {
            enable: true, 
            value_area: 900
          }
        },
        shape: {
          type:'circle', 
          stroke: {
            width: 6,
            color: '#009900'
          }
        }
      }
    }} />
    <Navbar />
    <Header />
    <AboutMe />
    <Skills />
    <Experience />
    <Portfolio />
    <Contact/>
    </>
  );
}

export default App;
