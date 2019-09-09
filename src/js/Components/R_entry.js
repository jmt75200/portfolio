import React, { useState } from 'react';

//Shows company, position, location, time, desc, job

const singleEntry = (props) => {
  const [jobState] = useState(props.job);
  const joblist = (
    <div className="job-list">
      {jobState.map((item, idx)=>{
        return (
          <p key={idx}>{item}</p>
        )
      })}
    </div>
  )
  return(
    <div className="Single grid-wrap">
      <div className="Left">
        <h3>{props.location}</h3>
        <h3>{props.time}</h3>
      </div>
      <div className="Right">
        <div className="circle-dot">
          <div className="dot"></div>
        </div>
        <h2>{props.company}</h2>
        <h3><span className="r-position">{props.position}</span></h3>
        <p><b>{props.desc}</b></p>
        {joblist}
      </div>
    </div>
  )
}

export default singleEntry;