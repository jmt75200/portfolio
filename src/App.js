import React, { useState } from 'react';
// Styles
import './sass/index.scss';

// Components
import Design from './js/Components/Desgin';
import Intro from './js/Components/Intro';
// import Menu from './js/Components/Menu';
// import Mission from './js/Components/Mission';
import Process from './js/Components/Process';
import Resume from './js/Components/Resume';

const App = props => {
  // let showView = <Resume />;
  const [viewState, setViewState] = useState('resume')
  const clickView = (show) =>{
    setViewState(show);
  }

  const showView = () =>{
    switch(viewState){
      case 'projects':
          return <Design />;
      case 'process':
          return <Process />;
      default: 
          return <Resume />;
    }
  }

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
            <h2>UX Engineer</h2>
            <div className="line-accent-top"></div>
          </div>
        </div>
        <div className="Menu">
          <ul className="nav-container">
            <li
              onClick={() => clickView('resume')}
              className={viewState === 'resume' ? 'active' : null}
            >Resume</li>
            {/* <li 
              onClick={() => clickView('process')}
              className={viewState === 'process' ? 'active' : null}
            >Process</li> */}
            <li 
              onClick={() => clickView('projects')}
              className={viewState === 'projects' ? 'active' : null}
            >Projects</li>
          </ul>
        </div>
        {showView()}
        {/* <Resume /> */}
        {/* <Mission /> */}
        {/* <Design /> */}
      </div>
    </div>
  );
}

export default App;
