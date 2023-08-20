import React from 'react'
import Orderform from './Orderform';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tablelist from './Tablelist';
const Preorder = () => {
  return (
   <main>
    <div className='container'>
    <div className='p-4'> 
      <h1 className='text-primary text-center'>Food Pre-booking</h1>
         <p className='text-success text-center lead'>Choice is ur's</p>
         <div>
          <Row className="justify-content-md-center">
            <Col lg="6">
         <Orderform/>
         <Tablelist/>
            </Col>
          </Row>
         

         </div>

    </div>
        

         <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut mollitia cum quisquam consequuntur beatae nihil eligendi laboriosam eius atque iusto quibusdam, laudantium esse quis deleniti asperiores tenetur corrupti at!</p>
         </div>

         </div>
    </main>
  )
}

export default Preorder;
