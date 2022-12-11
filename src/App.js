import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Testimonial from "./component/Testimonial/Testimonial"
import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"
import About from "./component/About/About"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Features /> */}
      <Portfolio />
      {/* <Resume /> */}
      {/* <Testimonial /> */}
      <Blog />
      <About/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
