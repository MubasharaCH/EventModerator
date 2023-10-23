import React from "react";
import Image from 'react-bootstrap/Image';
import ContactBanner from "../img/contact.png";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
const Contact = () => {
  return (
    <div className="container mb-3  ">
      <div className="text-center">
        <div className="">
        <Image src={ContactBanner} fluid />;
        
        <h1>Conatact Us</h1>
        <h5>Any Question Or Remarks? Just Write Us A Message!</h5>
        </div>
      </div>

      <div className="card shadow " >
        <div
          className="card-body m-0" >
          <div className="row mt-0">
          <div class="col-md-3 text-center bg-dark text-white rounded-top rounded-bottom">
            <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
            <h3 className=" mt-3">Contact Information</h3>
                </li>
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <h7 className="text-light">
                Fill up the form and our Team will get back to you within 24
                hours. 
              </h7>
                </li>
                <li><i class="fas fa-map-marker-alt fa-2x d-flex mt-3"> <CiLocationOn size={30} className="me-2"/><p>San Francisco, CA 94126, USA</p></i>
                    
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x d-flex"><TbPhoneCall size={30} className="me-2"/> <p>+ 01 234 567 89</p></i>
                  
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x d-flex"><IoMailOpenOutline size={30} className="me-2"/><p>mubasharach44@gmail.com</p></i>

                </li>
            </ul>
        </div>
            <div className="col">
              <div className="row">
              <div className="col">
              <span className="">First Name<span className="text-danger">*</span></span>
              <input type="text" className="form-control border-top-0 border-start-0 border-end-0 shadow-none border-danger"/>
              </div>
              <div className="col">
              <span className="">Last Name<span className="text-danger">*</span></span>
              <input type="text" className="form-control border-top-0 border-start-0 border-end-0  shadow-none border-danger"/>
              </div>
              </div>
              <div className="row mt-3">
              <div className="col">
              <span className="">Email<span className="text-danger">*</span></span>
              <input type="text" className="form-control border-top-0 border-start-0 border-end-0  shadow-none border-danger"/>
              </div>
              <div className="col">
              <span className="">Phone<span className="text-danger">*</span></span>
              <input type="text" className="form-control border-top-0  border-start-0 border-end-0 shadow-none border-danger"/>
              </div>
              </div>
              <div>
                <h6 className="mt-3">Category</h6>
                <div class="form-check form-check-inline mt-2">
   <input class="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
    <label class="form-check-label" for="inlineRadio1">General Inquiry</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
   <label class="form-check-label" for="inlineRadio2">Technical Issue</label>
   </div>
    <div class="form-check form-check-inline">
     <input class="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
     <label class="form-check-label" for="inlineRadio3">suggestions</label>
     </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input shadow-none " type="radio"  name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
        <label class="form-check-label" for="inlineRadio3">Others</label>
         </div>
              </div>
             
              
          <div className="mt-3">
          <span className="">Message<span className="text-danger">*</span></span>
              <input type="text" className="form-control border-top-0 border-start-0 border-end-0 shadow-none border-danger"/>
              <button className=" mt-3 btn btn-md bg-dark text-light float-end">Submit Now!</button>
          </div>
           
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
