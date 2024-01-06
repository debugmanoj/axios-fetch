import React,{useState,useEffect} from 'react'
import axios from 'axios';
let APIURL="https://jsonplaceholder.typicode.com/users"
import Nav from '../Common/CommonBar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function Dashboard() {
  let [data,setData]=useState([])
  let datas=async()=>{
    try {
      let value=await axios.get(APIURL)
      
      if(value.status===200){
        setData(value.data)
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    datas();
  },[])
  return <>
    <Nav/>
    <div  className='text-center mb-4 ' style={{fontSize:"25px",marginTop:"40px"}}>Dashboard</div>
   
    <Table  bordered hover size="sm">
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th> Name</th>
          <th>City</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          
        data.map((e,i)=>{
       return  <tr className='text-center' key={e.id}>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.address.city}</td>
        <td>{e.company.name}</td>
        <td>{e.phone}</td>
        <td className='d-flex justify-content-center '>
          <div className=''>
          <Button variant="outline-primary" className='mx-3 text-center'>Edit </Button>
          
          </div>
          <div>
          <Button variant="outline-danger">Delete</Button>
          </div>
        </td>
      </tr>
        })}



      </tbody>
    </Table>
    </>
}

export default Dashboard