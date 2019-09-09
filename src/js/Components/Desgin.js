import React, { useState } from 'react';
import d_entry from '../../lib/_design-data';
import Entry from './D_entry';

const design = () =>{
  const [designState] = useState(d_entry);
  const showcase = (
    <div>
      {designState.map((item, idx)=>{
        return <Entry
          key={idx}
          name={item.name}
          imageOne={item.images[0]}
          imageTwo={item.images[1]}
          desc={item.desc}
          overview={item.overview}
          tools={item.tools}
        />
      })}
    </div>
  )

  return (
    <div className="Container">
      <h1 className="Super-title">Projects</h1>
      {showcase}
    </div>
  )
}

export default design;