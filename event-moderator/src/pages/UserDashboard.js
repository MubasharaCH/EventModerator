import React, { useEffect, useState,useRef } from "react";
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

const UserDashboard = () => {
   const inputRef=useRef(null);
   const [image,setImage]=useState();
   const [user, setUser] = useState({
    fname: "",
     lname: "",
     phone:'',
     vname:'',
     vcategory:'',
     address:'',
     state:'',
     wtreval:''

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
 const handleSsubmit= async (e)=>{
  const {fname,lname,phone,vname,vcategory,address,state,wtreval}=user
  e.preventDefault();
  const res= await fetch('/udashbord',{
    method:"POST",
    headers:{
      'Content-Type': 'application/json ',
    },
    body: JSON.stringify({
      fname,lname,phone,vname,vcategory,address,state,wtreval
    })
  });

 }
 const handleimage=()=>{
  inputRef.current.click();
 }

 const handleimageChng=(e)=>{
  const file=e.target.files[0];
  console.log(file)
  setImage(e.target.files[0])
 }
 //const location = useLocation();
  return (
    <div>
      <div className="container mb-4">
        <Card className="shadow">
        <Row className="text-center">
        <Col xs={4} md={3}>
        <div className="text-center m-4 " onClick={handleimage}>
            {image ? <img src={URL.createObjectURL(image)} alt=" " className=" mw-100 mh-100 border rounded-circle text-gray "  fluid/> : <RiUserLine size={90} className="border rounded-circle text-gray" /> }
           
            <input ref={inputRef} type="file" style={{display:"none"}} onChange={handleimageChng}/>
        
            </div>
            
        </Col>
        </Row>
        </Card>
        <Card className="mt-3 shadow">
          <h3 className="m-3"> My Information</h3>
          <hr/>
         <div>
        
  <form  method="POST">
   <div class="form-group row m-3">
    <label  class="col-sm-2 col-form-label">First Name</label>
    <div class="col-sm-10">
    <input type="name" class="form-control shadow-none" name="fname" value={user.fname} id="inputName" onChange={updateProfile}/>
    </div> 
  </div>
  <div class="form-group row m-3">
    <label  class="col-sm-2 col-form-label">Last Name</label>
    <div class="col-sm-10">
    <input type="Lname" class="form-control shadow-none" name="lname" value={user.lname} id="inputLName" onChange={updateProfile}/>
    </div> 
  </div>
  <div class="form-group row m-3" >
    <label for="staticEmail" class="col-sm-2 col-form-label"> Email Address</label>
    <div class="col-sm-10">
    <input type="staticEmail" class="form-control shadow-none" method="GET"   id="inpuAddress" placeholder="email" value={user.email} readOnly/>
    </div> 
  </div>
  <div class="form-group row m-3">
    <label for="phoneNumber" class="col-sm-2 col-form-label">Phoen Number</label>
    <div class="col-sm-10">
    <input type="phoneNumber" class="form-control shadow-none" name="phone" value={user.phone} id="inpuAddress"onChange={updateProfile}/>
    </div> 
  </div>
  <div class="form-group row m-3">
    <label  class="col-sm-2 col-form-label">Vendor Name</label>
    <div class="col-sm-10">
      <input type="Name" class="form-control shadow-none" name="vname" value={user.vname} id="inputVName" onChange={updateProfile}/>
    </div>
  </div>
  <div class="form-group row m-3">
    <label  class="col-sm-2 col-form-label">Vendor category</label>
    <div class="col-sm-10">
    <Form.Select aria-label="Default select example" name="vcategory" value={user.vcategory} className="border-none border-0 shadow-none" onChange={updateProfile}>
      <option>select..</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </div>
  </div>
  <div class="form-group row m-3">
    <label  class="col-sm-2 col-form-label">Address & city</label>
    <div class="col-sm-10">
      <input type="Address" class="form-control shadow-none" name="address" value={user.address} id="inputAddCity" onChange={updateProfile}/>
    </div>
  </div>
  <div class="form-group row m-3">
    <label  class="col-sm-2 col-form-label">State<span className="text-danger">*</span></label>
    <div class="col-sm-10">
    <Form.Select aria-label="Default select example" name="state" value={user.state} className="border-none border-0 shadow-none"onChange={updateProfile} >
      <option>Please select state</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </div>
  </div>
  <div class="form-group row m-3">
    <label  class="col-sm-2 col-form-label">Willing To Travel</label>
    <div class="col-sm-10">
    <Form name="wtreval" value={user.wtreval}>
      <Form.Check style={{width:'20rem'} }  onChange={updateProfile}// prettier-ignore
        type="switch"
        id="custom-switch"
        
      />
    </Form>
    </div>
  </div>
  <div className="text-center mt-3 mb-3">
  <Button className="bg-dark text-center border border-dark rounded" type="submit"  size="lg" onClick={handleSsubmit}>Update Information</Button>
  </div>
</form>
         </div>
        </Card>
        <Card className="mt-3 shadow">
          <h3 className="m-3"> My Social Media Profile</h3>
          <hr/>
         <div>
        
  <form>
   <div class="form-group row m-3">
    <label  class="col-sm-3 col-form-label"><h6>Facebook UserName</h6></label>
    
    <div class="col-sm-9 d-flex">
    <div className="social-media">
    <BsFacebook size={50} className="m-2 text-primary"/>
    </div>
    <input type="name" class="form-control" id="inputName"/>
    </div> 
  </div>
  <div class="form-group row m-3">
    <label  class="col-sm-3 col-form-label"><h6>Instagaram UserName</h6></label>
    <div class="col-sm-9 d-flex">
      <div className="social-media">
      <GrInstagram size={50} className="m-2 text-white instagram rounded"/>
      </div>    
    <input type="Lname" class="form-control" id="inputLName"/>
    </div> 
  </div>
  <div class="form-group row m-3">
    <label for="staticEmail" class="col-sm-3 col-form-label"> <h6>Twitter UserName</h6></label>
    <div class="col-sm-9 d-flex">
    <div className="social-media">
      <BsTwitter size={50} className="m-2 text-primary"/>
      </div>
    <input type="staticEmail" class="form-control" id="inpuAddress"/>
    </div> 
  </div>
  <div class="form-group row m-3">
    <label for="phoneNumber" class="col-sm-3 col-form-label"><h6>Pinterest Username</h6></label>
    
    <div class="col-sm-9 d-flex">
    <div className="social-media">
      <BsPinterest size={50} className="m-2 text-danger"/>
      </div>
    <input type="phoneNumber" class="form-control" id="inpuAddress"/>
    </div> 
  </div>
  <div class="form-group row m-3">
    <label  class="col-sm-3 col-form-label"> <h6>Youtube Username</h6></label>
    <div class="col-sm-9 d-flex">
    <div className="social-media">
      <BsYoutube size={50} className="m-2 text-danger"/>
      </div>
      <input type="Name" class="form-control" id="inputVName"/>
    </div>
  </div>
 
  <div class="form-group row m-3">
    <label  class="col-sm-3 col-form-label"><h6>Tiktok Username</h6></label>
    <div class="col-sm-9 d-flex">
    <div className="social-media">
      <FaTiktok size={50} className="m-2"/>
      </div>
      <input type="Address" class="form-control" id="inputAddCity"/>
    </div>
  </div>
 
  <div className="text-center mt-3 mb-3">
  <Button className="bg-dark text-center border border-dark rounded"   size="lg">Update Social Media</Button>
  </div>
</form>
         </div>
        </Card>
        <Card className="mt-3 shadow">
        <h3 className="m-3"> Delete My Profile</h3>
          <hr/>
          
          <p className="text-center">This will delete your business listing from Event Massi, you will no longer be listed in our directory.</p>
          <div className="text-center mt-3 mb-3">
  <Button className="bg-dark text-center border border-dark rounded"   size="lg">Delete My Account</Button>
  </div>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
