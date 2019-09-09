import React, { useState } from 'react';
import r_entry from '../../lib/_resume-data';
import Entry from './R_entry';

const resume = () =>{
  const [resumeState] = useState(r_entry);
  const exp = (
    <div className="exp">
      {resumeState.experience.map((item, idx)=>{
        return <Entry
          key={idx}
          company={item.company}
          location={item.location}
          time={item.time}
          desc={item.company_desc}
          position={item.position}
          job={item.job_desc}
        />
      })}
    </div>
  )
  const edu = (
    <div className="edu">
    {resumeState.education.map((item, idx)=>{
      return <Entry
      key={idx}
      company={item.company}
      location={item.location}
      time={item.time}
      desc={item.company_desc}
      position={item.position}
      job={item.job_desc}
    />
    })}
  </div>
  )
  return (
    <div>
      <div className="Container">
        <h1 className="Super-title">Experience</h1>
        {exp}
      </div>
      <div className="Container">
        <h1 className="Super-title">Education</h1>
        {edu}
      </div>
    </div>
  );
}

export default resume;