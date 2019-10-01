import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <aside className="menu">
      <h1>What's New</h1>
        <button>Local News</button>
        <button>Technology</button>
        <button>Entertainment</button>
        <button>Science</button>
        <button>Health</button>
    </aside>
  )
}

export default Menu;