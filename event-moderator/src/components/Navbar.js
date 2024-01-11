import React, { useContext } from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BsSearchHeart } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ELogo from "../img/EL.png";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
 import { UserContex } from "../App";

const Navbar = () => {

 const {state,dispatch}=useContext(UserContex);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name,value;
  const handleChnage=(e)=>{
   name=e.target.name
   value=e.target.value
   setUser({...user,[name]:value})
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const {email, password}=user
    if(!email || !password){
     window.alert("Wrong Credentials")
    }else{
   
    
     const res= await fetch('/signin',{
       method:"POST",
       headers:{
         'Content-Type': 'application/json ',
       },
       body: JSON.stringify({
         email, password
       })
     });
      const data=  res.json();
   
     if(data.status === 400 || !data){
       window.alert('User not found! Register First ')
       console.log('Invalid inuput')
     }else{
      dispatch({type:"USER",payload:true})
       window.alert(' login SuccessFull')
       console.log('login SuccessFull')
      // navigate('/UDashbord')
     }
   }
   }
const RenderMenu=()=>{
  if(state){
    return(
      <>
      
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " href="#">
                  <Link
                    to="/browser"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    Browse Vendors
                  </Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active " href="#">
                  <Link
                    to="/Explore"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    {" "}
                    Explore
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <Link
                    to="/whyEm"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    {" "}
                    Why EM?
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    Conatct Us
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="#">
                  <Link to="/profile"    style={{ textDecoration: "none" }}
                    className="text-dark">
                  View Profile
                  </Link>
                 
                </a>
              </li>
               
               <li className="nav-item">
                <a className="nav-link active" href="#">
                  <Link
                    to="/UDashbord"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    {" "}
                   Dashboard
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <Link
                    to="/logout"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    {" "}
                   LogOut
                  </Link>
                </a>
              </li>          
      </>
    )
  }
  else{
    return(
      <>
       
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " href="#">
                  <Link
                    to="/browser"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    Browse Vendors
                  </Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active " href="#">
                  <Link
                    to="/Explore"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    {" "}
                    Explore
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <Link
                    to="/whyEm"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    {" "}
                    Why EM?
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                  >
                    Conatct Us
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="#">
                  
                  View Profile
                  
                </a>
              </li>
                 <li className="nav-item ">
                 <a className="nav-link active" href="#">
                   <Link
                     style={{ textDecoration: "none" }}
                     className="text-dark "
                     onClick={handleShow}
                   >
                     {" "}
                     Login
                   </Link>
                   <Modal size="lg" show={show} onHide={handleClose}>
                     <Modal.Header closeButton>
                       <Modal.Title className="">
                         Login To Your Venords Account
                       </Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                       <div className="container position-center">
                         <div className="  d-flex align-items-center justify-content-center">
                           <div
                             className=""
                             style={{ width: "18rem", height: "20rem" }}
                           >
                             <div className="">
                               <Form className="position-center" method="POST" >
                                 <div class="form-group">
                                   <Form.Label
                                     for="exampleInputEmail1"
                                     controlId="formBasicBidding"
                                   >
                                     Email address
                                   </Form.Label>
                                   <input
                                     type="email"
                                     class="form-control shadow-none border border-warning"
                                     name="email"
                                     value={user.email}
                                     id="exampleInputEmail1"
                                     aria-describedby="emailHelp" onChange={handleChnage}/>
                                   <small
                                     id="emailHelp"
                                     class="form-text text-muted"
                                   >
                                     We'll never share your email with anyone
                                     else.
                                   </small>
                                 </div>
                                 <div class="form-group">
                                   <Form.Label for="exampleInputPassword1">
                                     Password
                                   </Form.Label>
                                   <input
                                     type="password"
                                     class="form-control shadow-none border border-warning"
                                     name="password"
                                     value={user.password}
                                     id="exampleInputPassword1"  onChange={handleChnage}/>
                                 </div>
                                 <p className="text-center mt-1 mb-1">
                                   Forget Password?
                                 </p>
                                 <div class="form-group form-check">
                                   <input
                                     type="checkbox"
                                     class="form-check-input shadow-none"
                                     id="exampleCheck1"
                                   />
                                   <Form.Label
                                     class="form-check-label "
                                     for="exampleCheck1"
                                   >
                                     Agree with turms & conditions
                                   </Form.Label>
                                 </div>
                                 <div className="container text-center ">
                                   <Button
                                     type="submit"
                                     variant="warning"
                                     class="btn bg-warning mt-2 mb-2"
                                     size="lg" onClick={handleSubmit} >
                                     Submit
                                   </Button>
                                 </div>
                               </Form>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="container d-flex text-center justify-content-center">
                         <button
                           className="btn btn-white me-3  shadow d-flex text-dark"
                           style={{ width: "12rem" }}
                         >
                           <Link
                             className="d-flex"
                             style={{ textDecoration: "none" }}
                             to="https://support.apple.com/en-us/HT204053"
                           >
                             <FaApple
                               className="me-1 d-flex text-dark"
                               size={20}
                             />
                             Sign in with Apple
                           </Link>
                         </button>
                         <button
                           className="btn btn-white me-3  shadow d-flex text-dark"
                           style={{ width: "12rem" }}
                         >
                           <Link
                             className="d-flex"
                             style={{ textDecoration: "none" }}
                             to="https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Bsign%2Bup%26rlz%3D1C1ONGR_en-GBPK1078PK1079%26oq%3D%26gs_lcrp%3DEgZjaHJvbWUqCQgBEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQkzMzAyajBqMTWoAgiwAgE%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAZAAQ&hl=en&passive=true&ifkv=AVQVeyz7T1GGqnffRNMpvvf4dXw4naisFRKIdzUf972GmVhNiXY4DFMqRkq0UPe9kl7gHpvIYWtUDA&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                           >
                             <FcGoogle className="me-1 d-flex" size={20} />
                             Sign in with Google{" "}
                           </Link>
                         </button>
                       </div>
                     </Modal.Body>
                     <Modal.Footer></Modal.Footer>
                   </Modal>
                 </a>
               </li>
              
              <button className="btn btn-dark btn-sm">
                <Link
                  to="/getStartFree"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Get start free
                </Link>
              </button>
           
      </>
    )
  }
}
 
  return (
    <>
    <div className="container mt-2 ">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <div className="bold text-warning me-3">
            <img src={ELogo} alt="logo" className="" height={90} width={100} />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Form
              inline
              className="text-center m-3  border rounded-lg rounded border-warning"
            >
              <InputGroup>
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-white border-white"
                >
                  <BsSearchHeart size={23} className="text-warning" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search "
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  className="shadow-none border-white border-left-0 "
                />
              </InputGroup>
            </Form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <RenderMenu/>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
