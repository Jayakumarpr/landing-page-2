import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Tablelist = () => {

     const upDatebtn=()=>{
          console.log()
     }

     const deleteBtn=()=>{

           console.log()
     }
  return (
    <Table striped bordered hover>
    <thead>
      <tr className='text-center'>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      <tr className='text-center'>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td> <Button variant="success" className='mx-3' onClick={(e)=>upDatebtn(e)}><i className="bi bi-pencil-square"></i></Button>
        <Button variant="success"><i className="bi bi-trash3" onClick={(e)=>deleteBtn(e)}></i></Button>
        </td>
      </tr>
    </tbody>
  </Table>
  )
}

export default Tablelist
