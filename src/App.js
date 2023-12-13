// import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
   <>
  <NavBar />
  <Home />
  <About/>
  <Portfolio />
  <Experience />
  <Contact />
  <SocialLinks />

  {/* <BrowserRouter>
  
       <NavBar /> 
      <Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/services' element={<About />}></Route>
  <Route path='/contact' element={<Portfolio />}></Route>
  <Route path='/about' element={<Experience />}></Route>
  <Route path='/about' element={<Contact />}></Route>
  <Route path='/about' element={<SocialLinks />}></Route> */}
 
  {/* <Redirect to ='/' /> */}
  {/* </Routes>
        </BrowserRouter> */}
  
   </>
  );
}

export default App;
