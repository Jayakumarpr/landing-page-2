import React from 'react'
import { useNavigate } from 'react-router-dom'


const Productcart = (props) => {

    const navigate=useNavigate();
    return (
        <div className='card m-2 mt-4  text-center ' style={{width:300}} onClick={()=>navigate('/productcartview/${props.id}')} >
            <div>
                <img src={props.image} height={180} width={200} className='border-radius-8 mt-3' />
            </div>

            <div className='card-body '>
                <h5 className='card-title'>
                    {props.name}
                </h5>

                <h6 className='mt-2'>Price:{props.price}</h6>
                <h6 className='mt-2'> Discount:{props.discount}</h6>
                <h6 className='mt-2'> Rating:{props.Rating}</h6>

            </div>

            <div>
                {props.stack >0 ? <button className='btn btn-success'>Available</button> : <button className='btn btn-outline-danger '>Out of stock</button>}
             
            </div>
        </div>






    )
}

export default Productcart
