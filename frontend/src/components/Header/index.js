import React from 'react'
import './header.css'



function Header() {
    return (
        <div className="mynav">
           <ul className="myul">
               <li className="myli"><a href="/" className="mylink">HOME </a> </li>
               <li className="myli"><a href="/api" className="mylink">COMMENTS </a> </li>
               <li className="myli"><a href="/" className="mylink">GALLERY </a> </li>
               <li className="myli"><a href="/" className="mylink">ABOUT </a> </li>
           </ul>
        </div>
    )
}

export default Header
