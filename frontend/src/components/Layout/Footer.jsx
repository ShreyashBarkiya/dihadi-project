import React from "react"
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer=() =>{
    return(
        <footer className={isAuthorized ? "footerShow" : "footerHide"}>
        <div>&copy; All Rights Reserved.</div>
        <div>
          <p>Developed by Abhishek Nema,Sambhav Kanugo,Shreyash Barkiya</p>
        </div>
      </footer>
    )
        
    
}

export default Footer