import React from 'react'

import {Accordion} from "react-bootstrap"
const BsAccoedion = () => {
  return (
    <Accordion defaultActiveKey="0" className="mt-5 p-3">
    <Accordion.Item eventKey="0" className="item">
     <Accordion.Header> What if my vendor category isn't listed? </Accordion.Header>
     <Accordion.Body>We added the main categories for event vendors, with more coming soon! Contact us if you have any suggestions.</Accordion.Body>
    </Accordion.Item>
   
    <Accordion.Item eventKey="1" className="item">
     <Accordion.Header> What if my vendor category isn't listed? </Accordion.Header>
     <Accordion.Body>We added the main categories for event vendors, with more coming soon! Contact us if you have any suggestions.</Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2" className="item">
     <Accordion.Header> How do I sign up for an Event Massi profile?  </Accordion.Header>
     <Accordion.Body>Click Sign Up on the top bar to register for free if you haven't already! </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3" className="item">
     <Accordion.Header>  Why Event Moderator(Em)? </Accordion.Header>
     <Accordion.Body> We are a fabric in the community for anyone planning events. Whether it's a wedding, formal gathering, or anything in between, 
      this is your one stop shop for finding all different types of vendors for your event!</Accordion.Body>
    </Accordion.Item>
     </Accordion>
  )
}

export default BsAccoedion;