import React from "react";
import {Header} from './component/Header';
import { About } from './component/About';
import {Skills} from './component/Skills';
import './index.css'
import {Projects} from './component/Projects';
import{Contact} from './component/Contact';
import {Footer} from './component/Footer';
// import {RouterOutlet as route}

function App() {
  return (
    <>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>

  );
}

export default App;
