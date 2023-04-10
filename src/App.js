import './App.css';
import About from './Componants/About';
import Contact from './Componants/Contact';
import Footer from './Componants/Footer';
import Home from './Componants/Home';
import Navbar from './Componants/Navbar';
import Projects from './Componants/Projects';
import Resume from './Componants/Resume';
 

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Resume/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
