import './App.css'
import {Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Newsletter from './pages/Newsletter'
import Navigation from './components/Navigation';
function App() {
  return(
    <div className='px-10'>
      <Navigation/>
      {/* <Form/> */}
      {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/Newsletter" element={<Newsletter/>}/>
    </Routes>
  </div>

  )
}

export default App
