import React from 'react'


function SidebarElements({selected,Icon,title}) {

  return (
    <div className={`side_elements ${selected && "selected"}`}>
        <Icon className="side_icons"/>
        <p className="side_title">{title}</p>
    </div>
  )
}

export default SidebarElements
