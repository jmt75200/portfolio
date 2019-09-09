import React from 'react';
// Styles
import './sass/index.scss';

// Components
import Design from './js/Components/Desgin';
import Intro from './js/Components/Intro';
// import Menu from './js/Components/Menu';
import Mission from './js/Components/Mission';
import Resume from './js/Components/Resume';


const App = props => {
  return (
    <div className="App">
      <div className="Aside">
        <img src="./dist/assets/selfie-slant.png" alt="joelle torneros"/>
        <Intro />
      </div>
      <div className="Main">
        <div className="Header">
          <div className="intro">
            <h1 className="name-title">Joelle Marie Torneros</h1>
            <h2>UX/UI Designer | Full Stack Web Developer</h2>
            <div className="line-accent-top"></div>
            {/* <Menu /> */}
          </div>
        </div>
        <Resume />
        <Mission />
        <Design />
      </div>
    </div>
  );
}

export default App;
