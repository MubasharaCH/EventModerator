import React from 'react'
import closet from "../img/closet.jpg";
import AfganJwelry from "../img/afganJ.jpg";
import Cake from "../img/cake.jpg";
import Khadjia from "../img/Khadija.jpeg";
import Caterer from "../img/Pcatereer.jpeg"
import Donut from "../img/donut.png"
import Logo from "../img/EventM.png"
import HairStyle from "../img/hairStyle.jpg"
import { GiTargetArrows } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
import {MdOutlineStarPurple500} from "react-icons/md"
import {PiPhoneCallThin} from "react-icons/pi"
import BV from './BV';
import SearctBar from '../components/SearctBar';


const BrowserV = () => {
  return (
    <>
    <SearctBar/>
    <div className='container'>
    
     <div className='mt-3'>
     <h3 className='text-warning'>Event Moderator Select</h3>
     <div class="container mb-4  ">
        <div class="row">
          <div class="col">
            {" "}
            <div className="container mt-3 d-flex">
              <img
                src={AfganJwelry}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
              />
              <div className="position-relative m-4">
                <h4 className="text-warning d-flex">Achikzai Jewels
                <MdOutlineStarPurple500 className='m-1' size={20}/>
                </h4>
                 
                  <span className="me-1 bg-yellow-light ">jewelry</span>
                  <span className="me-1 bg-yellow-light ">New York</span>
                  <span className="bg-yellow-light ">$</span>
                  <p className=''>Handmade afghan jewelry + nys certified cosmotologist.
                     10+ years in makeup application industry. 
                    Formerly known as Portrait BeautyNY</p>
              
                <div className="d-flex">
                  <button className="btn btn-md btn-warning d-flex me-2 shadow">
                    <PiPhoneCallThin className='' size={20}/> Call Now
                  </button>{" "}
                  <div className="card text-center me-1">
                    <GiTargetArrows className="me-1" size={25} />
                  </div>
                  <div className="card text-center">
                    <SiGmail className="" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            {" "}
            <div className="container d-flex">
              <img
                src={Cake}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
              />
              <div className="position-relative m-4">
                <h3 className="text-warning">Edible Arrangments <MdOutlineStarPurple500 className='m-1' size={20}/>
                </h3>
                 <span className="me-1 bg-yellow-light rounded-md">
                    Floral & Style 
                  </span>
                  <span className="me-1 bg-yellow-light rounded-md">
                    Cake,dessert & ice creame
                  </span>
                  <span className="me-1 bg-yellow-light rounded-md">
                    New York
                  </span>
                  <span className=" bg-yellow-light">$</span>
             <p>Edible Arrangement's can help you set up the perfect Center Peices or 
              Fruit Stations for Appetizers or Dessert at your next event! Please contact us! 
              We will Deliver!</p>
                <div className="d-flex">
                  <button className="btn btn-md btn-warning d-flex me-2">
                  <PiPhoneCallThin className='' size={20}/> Call Now
                  </button>{" "}
                  <div className="card text-center me-1">
                    <GiTargetArrows className="me-1" size={25} />
                  </div>
                  <div className="card text-center">
                    <SiGmail className="" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-100 "></div>
          <div class="col mt-4">
            {" "}
            <div className="container d-flex">
              <img
                src={Khadjia}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
              />
              <div className="position-relative m-4">
                <h3 className="text-warning">Event By Khadija <MdOutlineStarPurple500 className='m-1' size={20}/></h3>
                <span className="me-1 bg-yellow-light ">Event planing & coordination</span>
                <span className="me-1 bg-yellow-light ">Online Store</span>
                  <span className="me-1 bg-yellow-light ">New York</span>
                  <span className="me-1 bg-yellow-light ">Connecticut</span>
                  <span className="bg-yellow-light t">$</span>
               <p>As a certified international wedding and event planner, 
                I can assure you that we only deal with legitimate companies so you never have to worry 
                about unexpected problems or delays that can ruin your special day.
               </p>
                <div className="d-flex">

                  <button className="btn btn-md btn-warning d-flex me-2">
                    <PiPhoneCallThin size={20}/>Call Now
                  </button>{" "}
                  <div className="card text-center me-1">
                    <GiTargetArrows className="me-1" size={25} />
                  </div>
                  <div className="card text-center">
                    <SiGmail className="" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            {" "}
            <div className="container d-flex">
              <img
                src={closet}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
              />
              <div className="position-relative m-4">
                <h3 className="text-warning">Closet London</h3>
                <h5 className="m-3">
                  {" "}
                  <span className="me-1 bg-yellow-light ">New York</span>
                  <span className="bg-yellow-light ">$</span>
                </h5>
                <div className="d-flex">
                <button className="btn btn-md btn-warning d-flex me-2">
                    <PiPhoneCallThin size={20}/>Call Now
                  </button>{" "}
                  <div className="card text-center me-1">
                    <GiTargetArrows className="me-1" size={25} />
                  </div>
                  <div className="card text-center">
                    <SiGmail className="" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr/>

    <div className='mb-4'>
    <h3 className='text-warning'>Event Moderator Preferred</h3>
    <div className='row'>
    <div className='col sm mt-3'>
    <img
                src={Caterer}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
         />
   <h4 className="text-gray">Pangea Caterers <MdOutlineStarPurple500 className='m-1' size={20}/></h4>
                   <span className="me-1 bg-yellow-light ">Catering/Food</span>
                  <span className="me-1 bg-yellow-light ">New York</span>
                  <span className="bg-yellow-light ">$</span>
                  <div className="d-flex">

<button className="btn btn-md btn-warning d-flex me-2">
  <PiPhoneCallThin size={20}/>Call Now
 </button>{" "}
   <div className="card text-center me-1">
<GiTargetArrows className="me-1" size={25} />
 </div>
<div className="card text-center">
<SiGmail className="" size={25} />
</div>
</div>
   </div>
   
   <div className='col sm mt-3'>
    <img
                src={Donut}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
         />
        <h4 className="text-gray">Donut Booths <MdOutlineStarPurple500 className='m-1' size={20}/></h4>
              <span className="me-1 bg-yellow-light ">Rentals</span>
              <span className="me-1 bg-yellow-light ">Photo booths</span>
                   <span className="me-1 bg-yellow-light ">Photographer/videograper</span>
                  <span className="me-1 bg-yellow-light ">New York</span>
                  <span className="bg-yellow-light ">$</span>
                  <div className="d-flex">

<button className="btn btn-md btn-warning d-flex me-2">
  <PiPhoneCallThin size={20}/>Call Now
 </button>{" "}
   <div className="card text-center me-1">
<GiTargetArrows className="me-1" size={25} />
 </div>
<div className="card text-center">
<SiGmail className="" size={25} />
</div>
</div>
   </div>
   <div className='col sm'>
   <img
                src={Logo}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
         />
        <h4 className="text-gray">JF Event Planner <MdOutlineStarPurple500 className='m-1' size={20}/></h4>
              <span className="me-1 bg-yellow-light ">DJ's</span>
              <span className="me-1 bg-yellow-light ">Cake,Desserts & Ice cream chocography</span>
                   <span className="me-1 bg-yellow-light ">Car & Limo</span>
                   <span className="me-1 bg-yellow-light ">Event planing & coordination</span>
                  <span className="me-1 bg-yellow-light ">New York</span>
                  <span className="bg-yellow-light ">$</span>
                  <div className="d-flex">

<button className="btn btn-md btn-warning d-flex me-2">
  <PiPhoneCallThin size={20}/>Call Now
 </button>{" "}
   <div className="card text-center me-1">
<GiTargetArrows className="me-1" size={25} />
 </div>
<div className="card text-center">
<SiGmail className="" size={25} />
</div>
</div>

   </div>
   <div className='col sm'>
   <img
                src={HairStyle}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
         />
        <h4 className="text-gray">Guriya Hair by K <MdOutlineStarPurple500 className='m-1' size={20}/></h4>
              <span className="me-1 bg-yellow-light ">Hair and Makeup</span>
              
                  <span className="me-1 bg-yellow-light ">New York</span>
                  <span className="bg-yellow-light ">$</span>
                  <div className="d-flex">

        <button className="btn btn-md btn-warning d-flex me-2">
          <PiPhoneCallThin size={20}/>Call Now
         </button>{" "}
           <div className="card text-center me-1">
  <GiTargetArrows className="me-1" size={25} />
         </div>
        <div className="card text-center">
  <SiGmail className="" size={25} />
</div>
</div>
   </div>
    </div>
    </div>




    </div>
    <hr/>
   <BV/>
    </>
  )
}

export default BrowserV;