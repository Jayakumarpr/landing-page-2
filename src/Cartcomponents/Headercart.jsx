import React from 'react'

const Headercart = () => {
  return (
    <div className=' p-3 bg-secondary text-center'>
       
      

       <div className='row justify-content-center pt-4 pb-2 '>
        <div className="  col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex ">
            <button className='btn btn-success me-4'> home</button>
            <input 
              className=' form-control'
              type='search'
              placeholder='search....'
            />
            <button className='btn btn-success ms-4 '> Cart</button>
        </div>

       </div>
       
    </div>
  )
}

export default Headercart
