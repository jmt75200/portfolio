import React, { useState } from 'react';

//Shows name, desc, images, overview

const singleEntry = (props) => {
  const [overviewState] = useState(props.overview);
  const overview = (
    <div className="overview-list">
      {overviewState.map((item, idx)=>{
        return (
          <p key={idx}>{item}</p>
        )
      })}
    </div>
  )
  const [toolState] = useState(props.tools);
  const tool = (
    <div className="tool-list">
      {toolState.map((item, idx)=>{
        return (
          <p key={idx}>{item}</p>
        )
      })}
    </div>
  )
  return(
    <div className="Single project-wrap">
      <div className="image-wrap">
      <img src={props.imageOne} alt={props.name}/>
      </div>
      <div className="project-intro">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </div>
      <div className="project-overview">
        {/* <div className="circle-dot">
          <div className="dot"></div>
        </div> */}
        {overview}
      </div>
      <div className="image-wrap">
        <img src={props.imageTwo} alt={props.name}/>
      </div>
      <div className="project-resp">
        <h3>Responsibilities &amp; Tools</h3>
        {tool}
      </div>
    </div>
  )
}

export default singleEntry;