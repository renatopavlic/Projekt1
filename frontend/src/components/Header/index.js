import React from 'react'
import {Link} from "react-router-dom";
import './header.css'



function Header() {
    return (
        <div className="mynav">
           <ul className="myul">
               <li className="myli"><a href="/" className="mylink">HOME </a> </li>
               <li className="myli"><a href="/api" className="mylink">COMMENTS </a> </li>
               <li className="myli"><a href="/" className="mylink">GALLERY </a> </li>
               <li className="myli">
                <Link to="/about" className="mylink">ABOUT</Link>
              </li>
           </ul>
        </div>
    )
}
/*<a href="/about" className="mylink">ABOUT </a>*/

export default Header
