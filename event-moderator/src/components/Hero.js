import React from "react";
import Typewriter from "typewriter-effect";
import Carousel from 'react-bootstrap/Carousel';
import { BsSearchHeart } from "react-icons/bs";
import Dashboard from "./Dashboard";
import Cards from "./Cards";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Hero = () => {
  return (
    <>
      <div className="container position-center">
      <Carousel className='text-center '>
    <Carousel.Item>
      <div  className=" w-100 d-flex flex-column SlideText text-center rounded-top rounded-bottom" style={{backgroundImage:"url(brid.png)",backgroundPosition:"center center",backgroundRepeat:"no-repeat" ,height:"65vh", width:"55vh"}}> 
      <Typewriter className="text-light"
  onInit={(typewriter) => {
    
    typewriter
        .typeString("Need help Finding nearby photographer?")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Need help Finding nearby Event vendor?")
        .deleteAll()
        .typeString("Need help Finding nearby Artist?")
        .deleteAll()
        .typeString("Need help Finding nearby venues?")
        .deleteAll()
        .typeString("Need help Finding nearby MakeUp Artist?")
        .start();
}}
/>
        <Form inline className="text-center m-3 SlideText border rounded-lg rounded border-warning text-warning" >
        <InputGroup>
          <InputGroup.Text id="basic-addon1"className="bg-white border-white" ><BsSearchHeart size={23} className="text-warning"/></InputGroup.Text>
          <Form.Control
            placeholder="Search "

            aria-label="Search"
            aria-describedby="basic-addon1"
            className="shadow-none border-white border-left-0 text-warning"
          />
        </InputGroup>
      </Form >
      </div>
    </Carousel.Item>
  </Carousel>
    </div>
      <Dashboard/>
      <Cards/>
    </>
  );
};

export default Hero;
