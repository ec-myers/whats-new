import React from 'react';
import './Menu.css'

const Menu = (props) => {
  return (
    <aside className="menu">
      <h1 className="menu-title">What's New?</h1>
        <button className="menu-button" name="local" onClick={event => props.changeNewsFeed(event)}>Local News</button>
      <button className="menu-button" name="technology" onClick={event => props.changeNewsFeed(event)}>Technology</button>
      <button className="menu-button" name="entertainment" onClick={event => props.changeNewsFeed(event)}>Entertainment</button>
      <button className="menu-button" name="science" onClick={event => props.changeNewsFeed(event)}>Science</button>
      <button className="menu-button" name="health" onClick={event => props.changeNewsFeed(event)}>Health</button>
    </aside>
  )
}

export default Menu;