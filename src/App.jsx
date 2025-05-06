import {BrowserRouter, Routes, Route} from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyle";
import Header from "./Components/Header/Header";
import Home from "./Components/Main/Home/Home";
import About from "./Components/Main/About/About";
import Services from "./Components/Main/Services/Services";
import Testimonial from "./Components/Main/Testimonial/Testimonial";
import Contact from "./Components/Main/Contact/Contact";
import Footer from "./Components/Footer/Footer";


export default function App(){
    return(
      <>
      <GlobalStyle />
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<About />}/>
          <Route path="/servicos" element={<Services />}/>
          <Route path="/depoimentos" element={<Testimonial />}/>
          <Route path="/contato" element={<Contact />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
      </>
    );
  }
