import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import ResumePdf from '../pic/YeasinArafat.pdf'
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME</h3>
            <h1>
              Hey, I’m <span>Yeasin Arafat</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={["Frontend Developer.", " MERN Developer.", "React Js Developer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Love to learn new skills. Now learning React Redux, Typescript and React Native. Full and fresh hand code is my first priority.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                
                <div className='button'>
                
                  <a download href={ResumePdf}>
                  <button className="btn_shadow">Download Resume</button>
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img className="hero_img" src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
