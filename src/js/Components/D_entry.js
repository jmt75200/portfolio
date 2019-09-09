import React from 'react';

//Shows name, desc, images, overview

const singleEntry = (props) => {
  return(
    <div className="Single grid-wrap">
      <div className="Left">
        <p>{props.overview}</p>
        <p>{props.tools}</p>
      </div>
      <div className="Right">
      <div className="circle-dot">
        <div className="dot"></div>
      </div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <div className="job-list">
          <img src={props.imageOne} alt={props.name}/>
          <img src={props.imageTwo} alt={props.name}/>
        </div>
      </div>
    </div>
  )
}

export default singleEntry;