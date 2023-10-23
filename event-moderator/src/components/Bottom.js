import React from "react";
import Elogo from "../img/EL.png"
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";


const Bottom = () => {
  return (
    
    <div class="">
    
        <footer className=" bg-dark">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4">
              <div>
                <img src={Elogo}  alt="logo"  height={90} width={100}/>
              </div>
              <p className="text-light">
              Your one stop shop to find all of your favorite event vendors
               and venues in your area! Want to get listed
              </p>
              <button className="btn btn-md btn-warning text-dark">Join Now</button>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <h5 class="mb-3 text-light" > Usefull links</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-1">
                  <a href="#!">About Us</a>
                </li>
                <li class="mb-1">
                  <a href="#!">Contact Us</a>
                </li>
                <li class="mb-1">
                  <a href="#!" >Explore</a>
                </li>
                
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <h5 class="mb-1 text-light mb-3" >Follow Us</h5>
               <BsFacebook className="me-2 text-primary" size={30} />
                <GrInstagram className="me-2  text-pink" size={30} />
                <BsTwitter className="me-2 text-primary" size={30} />
                <FaTiktok className="me-2 text-light" size={30} />
             
            </div>
          </div>
        </div>
        <hr className="text-light " />
        <div class="text-center p-3 text-light">
          <p> Terms & Services |Privacy Policy |Cookies Policy 
          </p>
         <a> © 2020 Copyright:</a>
          <a class="text-light" href="/">EventModerator.com</a>
        </div>
      
      </footer>
      
    </div>
  
  );
};

export default Bottom;
