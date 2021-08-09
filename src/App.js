import React, {useState, useEffect } from 'react';
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };
  useEffect(() =>{
    window.addEventListener("scroll",handleScroll);
  }, [scrollHeight])
  return (
    <div className="App">
      <Navbar  isScrolling = {scrollHeight} />
      <Cover />
      <About />
      <center><h3>Mis Proyectos</h3>
      <br/>
      <h4>Sitios web creados</h4>
      <p><a href="https://www.ozean.co/" target="_blank" rel="nofollow noopener">https://www.ozean.co/</a><br /><a href="https://www.on-media.com.co/" target="_blank" rel="nofollow noopener">https://www.on-media.com.co/</a><br /><a href="https://www.mrgrillguardian.com/" target="_blank" rel="nofollow noopener">https://www.mrgrillguardian.com/</a><br /><a href="https://www.skapshois.com/" target="_blank" rel="nofollow noopener">https://www.skapshois.com/</a><br /><a href="https://www.logiserviceszf.com.co/" target="_blank" rel="nofollow noopener">https://www.logiserviceszf.com.co/</a><br /><a href="https://variedadeselena.com/" target="_blank" rel="nofollow noopener">https://variedadeselena.com/</a><br /><a href="https://www.johaspa.co/" target="_blank" rel="nofollow noopener">https://www.johaspa.co/</a></p>
      </center>
      <br/>
    </div>
  );
}

export default App;
