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
  return(
    <div className="Single grid-wrap">
      <div className="Left">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </div>
      <div className="Right">
        <div className="circle-dot">
          <div className="dot"></div>
        </div>
        {overview}
        <p>{props.tools}</p>
        <div className="job-list">
          <img src={props.imageOne} alt={props.name}/>
          <img src={props.imageTwo} alt={props.name}/>
        </div>
      </div>
    </div>
  )
}

export default singleEntry;