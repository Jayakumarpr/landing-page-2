import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';


const Orderform = () => {

  const [verity, setVerity] = useState("")
  const [ingiredians, setIngiredians] = useState("")
  const [member, setMember] = useState("")

  const addOrder=(e)=>{

    e.preventDefault()
    console.log({verity,ingiredians,member})
  }
  return (
    
    <section className='my-4'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Food verity</Form.Label>
          <Form.Control type="text" placeholder="prepared food type" value={verity} onChange={(e) => setVerity(e.target.value)} />
          <Form.Text className="text-muted">
            We'll only order Non-vedge combo.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prepared specify ingiredians</Form.Label>
          <Form.Control type="text" placeholder="Add-on "  value={ingiredians} onChange={(e)=>setIngiredians(e.target.value)}/>
        </Form.Group>

        <FormGroup>
          <FormLabel>Booking-NO of tables</FormLabel>
          <FormControl type='number' placeholder='Enter member count'  value={member} onChange={(e)=>setMember(e.target.value)} />
        </FormGroup>

        <div className='text-center m-4 '>

          <Button variant="success" type="order" onClick={(e)=>addOrder(e)}>
            Submit
          </Button>
        </div>
      </Form>
      </section>
    
  )
}

export default Orderform
