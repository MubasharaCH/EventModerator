import React from 'react'
import Q  from "../img/Faq.png"
import Image from 'react-bootstrap/Image';
import BsAccoedion from '../components/BsAccoedion';

const WhyEM = () => {
  return (
    <div className='container mb-4'>
    <div className='text-center'>
    <Image src={Q} fluid />;
   
   <h2>Do You Have Any Questions About Event Moderator?</h2>
   <h5>Learn More About Event Moderator Below, Or Contact Us!</h5>
    </div>
 <div className='mt-5 '>
   <h3>Frequently Asked Questions</h3>
   <BsAccoedion/>
  <div className='bg-c-light w-full h-20 mt-5 text-center rounded-top rounded-bottom '>
     <h2 className=''>Give Us Your Feedback</h2>
     <h5 className='mt-3 text-gray'>Do you have any questions or concerns?</h5>
     <button className='btn btn-md btn-warning text-white mt-3 mb-3'>Contact Us</button>
  </div>

  </div> 
    </div>
  )
}

export default WhyEM;