import React, { useState } from 'react';
import p_entry from '../../lib/_process-data';
import Entry from './P_entry';

const process = () =>{
  const [processState] = useState(p_entry);
  const showProcess = (
    <div>
      {processState.map((item, idx)=>{
        return <Entry
          key={idx}
          position={item.position}
          imageOne={item.images[0]}
          desc={item.desc}
        />
      })}
    </div>
  )
  return (
    <div className="Process Container">
      <h1 className="Super-title">The process</h1>
      {showProcess}
    </div>
  )
}

export default process;