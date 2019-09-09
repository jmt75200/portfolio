import React from 'react';

const intro = () =>{
  return (
    <div className="intro-container">
      <div className="intro-desc">
        {/* <h1>Joelle Torneros</h1> */}
        {/* <h2>UX/UI Designer | Full Stack Web Developer</h2> */}
        <p>I’m a passionate new media designer turned full stack web developer with 10 years of experience in structuring, developing and implementing business websites and online applications. </p>
        <p>Seeking an opportunity to leverage my skill set  with modern web technologies, design, marketing and project management in a technology forward company.</p>
      </div>
      <div className="bw-slant">
        <img src="./dist/assets/white-slant.png" alt="deco" />
      </div>
      <div className="Contact">
        <h2>Contact Info</h2>
        <div className="Location">
          <h4 className="side-titles">Location</h4> 
          <p>Seattle, WA</p>
        </div>
        <div className="Links">
          <p className="side-titles">Find Me</p>
          <a href="https://www.linkedin.com/in/joelletorneros/">Linkedin/JoelleTorneros</a>
          <a href="https://github.com/jmt75200">Github/JMT75200</a>
        </div>
      </div>
    </div>
  )
}

export default intro;