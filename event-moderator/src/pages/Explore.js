
import React from 'react';
import Image from 'react-bootstrap/Image';
import  birth from "../img/birth.png"
import bride from "../img/brid.png"
import Anniversiry from "../img/ann.png"
import Party from "../img/party.png"
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { GiTargetArrows } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
import {PiPhoneCallThin} from "react-icons/pi"
import Button from 'react-bootstrap/esm/Button';

import Gallery from '../components/Gallary';


const Explore = () => {
  
  return (
    <>
    <div className='container'>
      <h1 className='text-center'>Event Moderator Explore</h1>
      <p className='text-center'>Welcome to Massi Explore, where we highlight some of our top vendors, showcase some of their best work and share deals and promotions for your next event</p>
      <div className='card shadow mb-3'>
        <div className='card body p-20 bg-dark'>

      <Carousel className='text-center '>
      <Carousel.Item className=''>
        <Image src={bride}  height={500} width={500} fluid />
       
      </Carousel.Item>
      <Carousel.Item>
      <Image src={Anniversiry} height={500} width={500} fluid/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={birth} height={500} width={500} fluid/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={Party} height={500} width={500} fluid/>
        <Carousel.Caption>
          <h3>forth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    </div>
      </div>
   <Row className='mt-4 mb-4'>
   <Col sm={8}>
    <h3>Event By Khadija</h3>
    <p className='mt-3'>As a certified international wedding and event planner, 
    I can assure you that we only deal with legitimate companies so you never have to worry 
    about unexpected problems or delays that can ruin your special day.

We plan everything from large scale weddings to intimate affairs, Baby Showers, 
Bridal Showers, Engagement Parties, Birthdays & Anniversaries. 
Events by Khadejah has the ability and sources that have made many dream events come true.
All in all, you can rest assured that with us, your wishes will come true.</p>

<h5>State</h5>
<div>
<Button className='bg-c-light border-light Button text-dark mt-3'>New York</Button>
</div>
<h5 className='mt-3'>Price</h5>
<div>
<Button className='bg-c-light border-light Button text-dark mt-3'>$$</Button>
</div>
<h5 className='mt-3'>category</h5>
<div>
<Button className='bg-c-light border-light Button text-dark mt-3 me-2'>DJ's</Button>
<Button className='bg-c-light border-light Button text-dark mt-3 me-2'>Cake,Dessert & Ice Cream</Button>
<Button className='bg-c-light border-light Button text-dark mt-3 me-2'>Car & Limo</Button>
<Button className='bg-c-light border-light Button text-dark mt-3 me-2'>Event Planning and Coordination</Button>
</div>
   </Col>
        <Col sm={4}>
          <div className='card shaow'>
          <div className='card body  ' >
            <div className='container text-center'>
             <h4 className='text-center mt-3 mb-3'>Interested In Event By Khadija</h4>
            <Row>
             <Col><button className=' btn btn-md btn-warning shadow'><PiPhoneCallThin size={30}/></button></Col>
           <Col><button className=' btn btn-md btn-white shadow '><SiGmail size={30}/></button></Col>
           <Col><button className=' btn btn-md btn-white shadow '><GiTargetArrows size={30}/></button></Col>
             </Row>
             <div className="d-grid gap-2 m-3">
      <Button variant="dark" size="lg">
      Inquire
      </Button>
    
    </div>
             
             </div>
          
          </div>
          </div>
        </Col>

   </Row>
    </div>
    <div className=' bg-c-light '>
      <div className='container'>
      <h4>Gallary</h4>
     <Gallery/>
      </div>
    </div>
    <div className='container text-center mt-5'>
    <h4>Can't find what you're loooking for?</h4>
    <Button className='mt-3 mb-4 shadow border-dark' variant="white" size="lg">Browser other vendors</Button>
    </div>
    
    </>
  )
}

export default Explore;