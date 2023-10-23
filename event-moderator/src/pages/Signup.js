import React from 'react'
import { Row,Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import {FaApple} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';
import Rose from "../img/rose.jpg"


const Signup = () => {
  return (
    <div >
        <div className='container mb-4 '>
         <Row>
          <Col sm={8}>
        
      <div className='container position-center'>
     <div className='  d-flex align-items-center justify-content-center' >
      <div className=''style={{width:"18rem" ,height:"20rem"}}>
       <div className=''>
    <Form className='position-center'>
   <div class="form-group">
    <Form.Label for="exampleInputEmail1" controlId="formBasicBidding">Email address</Form.Label>
    <input type="email" class="form-control shadow-none border border-warning" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <Form.Label for="exampleInputPassword1">Password</Form.Label>
    <input type="password" class="form-control shadow-none border border-warning" id="exampleInputPassword1"/>
  </div>
  <p className="text-center mt-1 mb-1">Forget Password?</p>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input shadow-none" id="exampleCheck1"/>
    <Form.Label class="form-check-label " for="exampleCheck1">Agree with turms & conditions</Form.Label>
  </div>
  <div className="container text-center ">
  <Button type="submit" variant="warning"  class="btn bg-warning mt-2 mb-2" size="lg" >
    Submit
 </Button>
  </div>
  
   </Form>
  
            </div>
            </div>

        </div>
    </div>
    <div className="container d-flex text-center justify-content-center" >
      <button className="btn btn-white me-3  shadow d-flex text-dark" style={{ width:"12rem"}} ><Link  className="d-flex" style={{textDecoration:"none"}} to="https://support.apple.com/en-us/HT204053"><FaApple className="me-1 d-flex text-dark" size={20}/>Sign in with Apple</Link></button>
     <button className="btn btn-white me-3  shadow d-flex text-dark" style={{ width:"12rem"}} ><Link  className="d-flex" style={{textDecoration:"none"}} to="https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Bsign%2Bup%26rlz%3D1C1ONGR_en-GBPK1078PK1079%26oq%3D%26gs_lcrp%3DEgZjaHJvbWUqCQgBEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQkzMzAyajBqMTWoAgiwAgE%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAZAAQ&hl=en&passive=true&ifkv=AVQVeyz7T1GGqnffRNMpvvf4dXw4naisFRKIdzUf972GmVhNiXY4DFMqRkq0UPe9kl7gHpvIYWtUDA&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
      <FcGoogle className="me-1 d-flex" size={20}/>Sign in with Google </Link></button>
    </div>
     
   
  
          </Col>
          <Image src={Rose} style={{height:"20rem",width:"18rem" }} className='m-3 Image-Signup' fluid/>
          <Col>
          </Col>
         </Row>
        </div>

    </div>
  )
}

export default Signup;