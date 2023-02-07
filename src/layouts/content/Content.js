import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import './Content.scss'

const Content = () => {
    let active = {
        color: "#212529",
        borderBottom: "3px solid #212529",
    };
  return (
    <div className='tab'>
      <nav>
        <div className='tab-inner'>
          <ul><li><NavLink to="/" style={({ isActive }) => (isActive ? active : undefined)}>Today</NavLink></li></ul>
          <ul><li><NavLink to="week" style={({ isActive }) => (isActive ? active : undefined)}>Week</NavLink></li></ul>
          <ul><li><NavLink to="hour" style={({ isActive }) => (isActive ? active : undefined)}>Hour</NavLink></li></ul>
        </div>
        <img alt="" />
      </nav>
      <Outlet/>
    </div>
  )
}

export default Content