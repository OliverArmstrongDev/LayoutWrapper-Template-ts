import React from 'react'
import "./Nav.css"

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav>
        <ul className="nav-items">
            <li><a href="#"  >Home</a></li>
            <li><a href="#" >About</a></li>
            <li><a href="#"  >Contact</a></li>
          
        </ul>

    </nav>
  )
}

export default Nav