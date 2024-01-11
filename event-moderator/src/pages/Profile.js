import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import {BsPinterest} from "react-icons/bs"
import Form from 'react-bootstrap/Form';
import { RiUserLine } from "react-icons/ri";
import { Button, Row,Col } from "react-bootstrap";

const Profile = () => {
   
   const [user, setUser] = useState({
    
   });
   const updateProfile=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
   // console.log(user)
 
   }
console.log(user);
 const  callUDashbord= async ()=>{
    try{
     const res = await fetch('/dashbord',{
      method:"GET",
      headers:{
        Accept : "application/json",
        'Content-Type': 'application/json ',
      },
      credentials:"include"
      
     });
      const data= await res.json();
      console.log(data);
      setUser(data);
    }catch(err){
      console.log(err)
    }

   }
   useEffect(()=>{
     callUDashbord();
   },[])


 //const location = useLocation();
  return (
    <div>
      <div className="container mb-4">
        <Card className="shadow">
          <div className="text-center m-4 ">
            <RiUserLine size={90} className="border rounded-circle text-gray" />
            <br />
            Welcome and create your Profile
            <div className="mt-2">
              <Button className="me-2 bg-warning border border-warning">
                LogOut
              </Button>
              <Button className="bg-warning border border-warning">
                Create Profile
              </Button>
            </div>
          </div>
        </Card>
        <Card className="mt-3 shadow">
          <h3 className="m-3"> My Information</h3>
          <hr/>
         <div>
        
  <form  method="GET">
 
  <div class="form-group row m-3" >
    <label for="staticEmail" class="col-sm-2 col-form-label"> Email Address</label>
    <div class="col-sm-10">
    <input type="staticEmail" class="form-control shadow-none" method="GET"   id="inpuAddress" placeholder="email" value={user.email} readOnly/>
    </div> 
  </div>
  <div class="form-group row m-3" >
    <label for="staticEmail" class="col-sm-2 col-form-label"> Email Address</label>
    <div class="col-sm-10">
    <input type="name" class="form-control shadow-none" method="GET"   id="inpuAddress" placeholder="name"  readOnly/>
    </div> 
  </div>
</form>
         </div>
        </Card>
     
      </div>
    </div>
  );
};

export default Profile;
