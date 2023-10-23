import React from "react";
import { FaUsers } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
const Cards = () => {
  return (
    <>
      <div className="container mb-4 ">
        <div className="row">
          <div className="col">
            <div className="card shadow ">
              <div className="card-body text-center container" style={{width:"18rem" ,height:"20rem"}}>
                <div className="items center justify-center">

               
                <h4 className="card-text mb-3">Join Our Facebook Group</h4>
                <FaUsers className="text-warning " size={80} />
                <h5 className="mb-3">Follow @eventmoderator</h5>
                <BsFacebook className="me-1 text-primary" size={30} />
                <GrInstagram className="me-1  text-pink" size={30} />
                <BsTwitter className="me-1 text-primary" size={30} />
                <FaTiktok className="me-1 tik" size={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <div className="card-body text-center container " style={{width:"18rem" ,height:"20rem"}}>
                <h4>Join Us on YouTube Page </h4>
                <FaUsers className="text-warning " size={80} />
                <h5>https://youtube.com/@eventmoderator?si=drJ8PV8CmjlNpQgI</h5>
                <ImYoutube2 className="text-danger" size={40} />
              </div>
            </div>
          </div>
          <div className="col h-70 ">
            <div className="card shadow ">
              <div className="card-body container text-center " style={{width:"18rem",height:"20rem"}} >
                <h4 className="m-3">
                  Subscribe to Event-Moderator Newsletter!
                </h4>
                <input
                  className=" bg-light rounded-sm "
                  type="text"
                  placeholder="Enter Email"
                />
                <button className="btn btn-lg btn-warning mt-3"> Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
