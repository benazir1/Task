import React from 'react'
import './Header.css'
import { useContext } from 'react'
import {Mycontext} from './Context'
function Header() {
    const{handleShow}=useContext(Mycontext)
    const{cart}=useContext(Mycontext)

  return (
    
         <div className="f1">
       <div onClick={() =>handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => handleShow(true)}> Cart
            <sup>{cart.length}</sup>
        </div>
    </div>

  )
}

export default Header