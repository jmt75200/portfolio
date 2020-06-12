import React from 'react';

const intro = () =>{
  return (
    <div className="intro-container">
      <div className="intro-desc">
        {/* <h1>Joelle Torneros</h1> */}
        {/* <h2>UX/UI Designer | Full Stack Web Developer</h2> */}
        <p>As a UX Engineer, I have worked on the front end of both web and mobile products and features used by people everyday. The work is challenging, fast-paced, and always evolving as am I. I have demonstrated analytical skills, an unwavering commitment to quality, a collaborative work ethic, and cutting-edge coding skills to every project I have been grateful to be a part of.</p><p>I live and breathe the fundamentals of JavaScript, CSS, and HTML, and have a diverse portfolio of web technologies new and old - all in order to launch innovative features to a global audience.</p>
      </div>
      <div className="bw-slant">
        <img src="./dist/assets/white-slant.png" alt="deco" />
      </div>
      <div className="Sub-aside">
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
      <div className="Sub-aside">
        <h2>Skillset</h2>
        <p className="side-titles">Designer</p>
        <p>InDesign , Photoshop, Illustrator, AfterEffects, Sketch, Google Docs, Google Sheets, VS Code, Sublime Text, Marketing Campaigns, Prototyping, App Design, UX Design, Marvel, Invision</p>
        <p className="side-titles">Developer</p>
        <p><b>Front-end Development:</b> HTML, CSS, SASS, Javascript, JQuery, React, React Native, Project Architechture, UI development</p>
        <p><b>Back-end Development:</b> Node.js, WebPack, MYSQL, Firebase, AWS</p>
      </div>
    </div>
  )
}

export default intro;