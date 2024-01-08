import React,{useState,useEffect} from 'react'
import axios from 'axios';
let APIURL="https://6598d30ca20d3dc41ceefd10.mockapi.io/v1/EmployeeCity"
import Nav from '../Common/CommonBar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  let navigate=useNavigate();
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
  let handleDelete=async(id)=>{
    console.log(id);
    try {
      let value=await axios.delete(`${APIURL}/${id}`)
   
      
      if(value.status===200){
       
        datas();
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
        <td>{e.city}</td>
        <td>{e.CompanyName}</td>
        <td>{e.phone}</td>
        <td className='d-flex justify-content-center '>
          <div className=''>
          <Button variant="outline-primary" className='mx-3 text-center' onClick={()=>navigate(`/edit/${e.id}`)}>Edit </Button>
          </div>
          <div>
          <Button variant="outline-danger" onClick={()=>handleDelete(e.id)}>Delete</Button>
          </div>
        </td>
      </tr>
        })}



      </tbody>
    </Table>
    </>
}

export default Dashboard