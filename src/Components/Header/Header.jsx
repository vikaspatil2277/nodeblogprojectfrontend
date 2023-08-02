import React from 'react'
import { NavLink, Route, Routes, Link} from "react-router-dom";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Fitness from "./Fitness";
import Food from "./Food";
import Technology from "./Technology";
import Hollywood from "./Hollywood";
import Details from '../details/Details';
import { GiHamburgerMenu } from 'react-icons/gi';



function Header() {
 
 

    

 

 
  return (
    <div className="App">
      <h3>The</h3>
      <Link to="/"><p>Siren</p></Link>
     
     
      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar" className='label'><GiHamburgerMenu /></label>
      <div className="links">
        <NavLink to="/" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Home
        </NavLink>
        <NavLink to="/bollywood" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Bollywood
        </NavLink>
        <NavLink to="/technology" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Technology
        </NavLink>
        <NavLink to="/hollywood" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Hollywood
        </NavLink>
        <NavLink to="/fitness" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Fitness
        </NavLink>
        <NavLink to="/food" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Food
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      
    </div>
  );
}

export default Header;
