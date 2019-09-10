import React from 'react';

const menu = (props) =>{
  return (
    <div className="Menu">
      <ul className="nav-container">
        <li onClick={() => props.click(false)}>Resume</li>
        <li onClick={() => props.click(true)}>Projects</li>
      </ul>
    </div>
  )
}

export default menu;