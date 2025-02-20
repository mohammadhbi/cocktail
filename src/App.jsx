import './App.css'
import {Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Newsletter from './pages/Newsletter'
import Navigation from './components/Navigation';
import Detail from './components/Detail';
import NotFound from './pages/NotFound';
import { useState } from 'react';
function App() {
  const [items, setItems]=useState(null)
  const [loader, setLoader]= useState(false);
  return(
    <div className='px-10'>
      <Navigation/>
      {/* <Form/> */}
      {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home items={items} setItems={setItems}  loader={loader} setLoader={setLoader} />}  />
      <Route path="/home" element={<Home items={items} setItems={setItems}  loader={loader} setLoader={setLoader} />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/Newsletter" element={<Newsletter/>}/>
      <Route path="/Detail/:id" element={<Detail items={items}  />}/>
      <Route path="/*" element={<NotFound />}/>
    </Routes>
  </div>

  )
}

export default App
