import React from 'react';

//Shows name, desc, images, overview

const singleEntry = (props) => {
  return(
    <div className="Single grid-wrap">
      <div className="Left">
        <p>{props.desc}</p>
        <p>{props.overview}</p>
        <p>{props.tools}</p>
      </div>
      <div className="Right">
        <h2>{props.name}</h2>
        <img src={props.imageOne} alt={props.name}/>
        <img src={props.imageTwo} alt={props.name}/>
      </div>
    </div>
  )
}

export default singleEntry;