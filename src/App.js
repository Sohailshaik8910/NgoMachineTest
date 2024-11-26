import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Media from './Pages/Media';
import Contact from './Pages/Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from './Pages/Projects';


function App() {
  return (
   <>
   <Router>

   <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/projects' element={<Projects/>}/>
   <Route path='/media' element={<Media/>}/>
   <Route path='/gallery' element={<Gallery/>}/>
   <Route path='/contact' element={<Contact/>}/>
   </Routes>

   <Footer/>
   </Router>
   </>
  );
}

export default App;
