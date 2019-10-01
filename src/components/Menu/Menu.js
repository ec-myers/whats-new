import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <aside className="menu">
      <h1 className="menu-title">What's New</h1>
        <button className="menu-button">Local News</button>
        <button className="menu-button">Technology</button>
        <button className="menu-button">Entertainment</button>
        <button className="menu-button">Science</button>
        <button className="menu-button">Health</button>
    </aside>
  )
}

export default Menu;