import React, { useEffect, useState } from 'react'
import Nav from '../Common/CommonBar'
import axios from 'axios';
import Cards from '../Common/Cards'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
let APIURL="https://6598d30ca20d3dc41ceefd10.mockapi.io/v1/EmployeeCity"



function Home() {
  
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
    <div className='text-center mb-5' style={{fontSize:"25px",marginTop:"40px"}}>Employee Details</div>
    <div className='container '>
    
    <CardGroup className='  '>
      <Card className='mx-auto p-2'>
      {
        data.map((e,i)=>{
          console.log(e);
          return <Cards user={e} name={i} key={i}/> 
        })
      }
      </Card>


 </CardGroup>
      
    </div>
    </> 
}

export default Home