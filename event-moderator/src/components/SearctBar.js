import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SearctBar = () => {
  return (
    <div className='container'>
        <div className='bg-c-light p-5'>
        <Row >
        <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search..."
              className=" mr-sm-2 shadow-none border-warning focus:border-warning"
            />
          </Col>
          <Col xs="auto">
          <Dropdown className=''>
        <Dropdown.Toggle variant="white" id="dropdown-basic" className='bg-white'>
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cake and dessert and Ice cream</Dropdown.Item>
        <Dropdown.Item href="#/action-2">car and Limo</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Col>
          <Col xs="auto">
          <Dropdown className=''>
        <Dropdown.Toggle variant="white" id="dropdown-basic" className='bg-white'>
        Keyword
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cake and dessert and Ice cream</Dropdown.Item>
        <Dropdown.Item href="#/action-2">car and Limo</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Col>
          <Col xs="auto">
          <Dropdown className=''>
        <Dropdown.Toggle variant="white" id="dropdown-basic" className='bg-white'>
        State/City
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cake and dessert and Ice cream</Dropdown.Item>
        <Dropdown.Item href="#/action-2">car and Limo</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Col>
          <Col xs="auto">
        <Dropdown >
        <Dropdown.Toggle variant="white" id="dropdown-basic" className='bg-white'>
        Price
       </Dropdown.Toggle>
       <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">$</Dropdown.Item>
        <Dropdown.Item href="#/action-2">$$</Dropdown.Item>
        <Dropdown.Item href="#/action-3">$$$</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
          </Col>
          <Col xs="auto">
          <button className='btn btn-md btn-warning text-light me-2'>Search</button>
          </Col>
          <Col xs="auto">
          <button className='btn btn-md btn-dark text-light '>Reset</button>
          </Col>
        </Row>
        

      
        </div>
    </div>
  )
}

export default SearctBar;