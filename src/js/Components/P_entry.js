import React, { useState } from 'react';

//Shows position, desc, image

const singleEntry = (props) => {
  // const [overviewState] = useState(props.overview);
  // const overview = (
  //   <div className="overview-list">
  //     {overviewState.map((item, idx)=>{
  //       return (
  //         <p key={idx}>{item}</p>
  //       )
  //     })}
  //   </div>
  // )
  return(
    <div className="Single project-wrap">
      <div className="image-wrap">
        {/* <img src={props.imageOne} alt={props.name}/> */}
      </div>
      <div className="project-intro">
        <h2>{props.position}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default singleEntry;