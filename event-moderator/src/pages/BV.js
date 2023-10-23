import React from 'react'
import ShawtaBeauty from "../img/ShBeauty.jpeg"

const BV = () => {
  return (
    <div className='container mt-4 mb-4'>
         <div className='row'>
         <div className='col sm'>
        <div className='container d-flex'>
        <img
                src={ShawtaBeauty}
                alt="closet"
                height={180}
                width={180}
                className="rounded-circle border border-warning"
              />
              <h6 className='m-5'>ShawetaBeauty</h6>
            </div> 

         </div>
         </div>

    </div>
  )
}

export default BV;