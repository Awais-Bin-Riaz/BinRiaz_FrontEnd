import React from 'react'
import './style.css'
import image from '../../../src/chat.png'
/**
* @author
* @function Contact
**/

export const Contact = (props) => {
    return (
            <button className="contactBtn"><a href='https://wa.me/+923092406793'> <img style={{position: "fixed", left: "60px", bottom: "60px", width:"70px"}} src={image}/></a></button>
    )
}
