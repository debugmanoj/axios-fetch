import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from '../Common/CommonBar'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
let APIURL="https://jsonplaceholder.typicode.com/users"

function Add() {
  let [data,setData]=useState([])
  let navigate = useNavigate()
  let datas=async()=>{
    try {
      let data = setData
      let value=await axios.post(APIURL,data)
      if(value.status===201)
      {
        
        navigate('/')
      }
    } catch (error) {
      
    }
  }
  let [form,setForm]=useState({
    name: "",
    userName: "",
    phone: "",
    location:{
      city:"",
      street:"",
      zipCode:"",


    },
    company:{
      name:"",
      CatchPhrase:"",
      bs:""
    },
    Website:""
  })
  let handleAdd=()=>{
    datas()
    console.log("Sucess");
  }
  let handleChange=(e)=>{
    const { name, value } = e.target;
    setForm(prevForm=>{
      if(name==="name"){
        return {
          name: value,
          userName: prevForm.userName,
          phone: prevForm.phone,
          location:{
            city:prevForm.location.city,
            street:prevForm.location.street,
            zipCode:prevForm.location.zipCode,
      
      
          },
          company:{
            name:prevForm.company.name,
            CatchPhrase:prevForm.company.CatchPhrase,
            bs:prevForm.company.bs
          },
          Website:prevForm.Website
        }
      }
      else if(name==="username"){
        return {
          name: prevForm.name,
          userName:value,
          phone: prevForm.phone,
          location:{
            city:prevForm.location.city,
            street:prevForm.location.street,
            zipCode:prevForm.location.zipCode,
      
      
          },
          company:{
            name:prevForm.company.name,
            CatchPhrase:prevForm.company.CatchPhrase,
            bs:prevForm.company.bs
          },
          Website:prevForm.Website
        }
      }
      else if(name==="phone"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          phone: value,
          location:{
            city:prevForm.location.city,
            street:prevForm.location.street,
            zipCode:prevForm.location.zipCode,
      
      
          },
          company:{
            name:prevForm.company.name,
            CatchPhrase:prevForm.company.CatchPhrase,
            bs:prevForm.company.bs
          },
          Website:prevForm.Website
        }
      }
      else if(name==="city"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          phone: prevForm.phone,
          location:{
            city:value,
            street:prevForm.location.street,
            zipCode:prevForm.location.zipCode,
      
      
          },
          company:{
            name:prevForm.company.name,
            CatchPhrase:prevForm.company.CatchPhrase,
            bs:prevForm.company.bs
          },
          Website:prevForm.Website
        }
      }
      else if(name==="street"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          phone: prevForm.phone,
          location:{
            city:prevForm.location.city,
            street:value,
            zipCode:prevForm.location.zipCode,
      
      
          },
          company:{
            name:prevForm.company.name,
            CatchPhrase:prevForm.company.CatchPhrase,
            bs:prevForm.company.bs
          },
          Website:prevForm.Website
        }
      }
      else if(name==="zipcode"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          phone: prevForm.phone,
          location:{
            city:prevForm.location.city,
            street:prevForm.location.street,
            zipCode:value,
      
      
          },
          company:{
            name:prevForm.company.name,
            CatchPhrase:prevForm.company.CatchPhrase,
            bs:prevForm.company.bs
          },
          Website:prevForm.Website
        }
      }
      else if(name==="companyName"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          phone: prevForm.phone,
          location:{
            city:prevForm.location.city,
            street:prevForm.location.street,
            zipCode:prevForm.location.zipCode,
      
      
          },
          company:{
            name:value,
            CatchPhrase:prevForm.company.CatchPhrase,
            bs:prevForm.company.bs
          },
          Website:prevForm.Website
        }
      }
      else if(name==="catchPhrase"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          phone: prevForm.phone,
          location:{
            city:prevForm.location.city,
            street:prevForm.location.street,
            zipCode:prevForm.location.zipCode,
      
      
          },
          company:{
            name:prevForm.company.name,
            CatchPhrase:value,
            bs:prevForm.company.bs
          },
          Website:prevForm.Website
        }
      }
      else if(name==="bs"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          phone: prevForm.phone,
          location:{
            city:prevForm.location.city,
            street:prevForm.location.street,
            zipCode:prevForm.location.zipCode,
      
      
          },
          company:{
            name:prevForm.company.name,
            CatchPhrase:prevForm.company.CatchPhrase,
            bs:value
          },
          Website:prevForm.Website
        }
      }
      else if(name==="website"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          phone: prevForm.phone,
          location:{
            city:prevForm.location.city,
            street:prevForm.location.street,
            zipCode:prevForm.location.zipCode,
      
      
          },
          company:{
            name:prevForm.company.name,
            CatchPhrase:prevForm.company.CatchPhrase,
            bs:prevForm.company.bs
          },
          Website:value
        }
      }
    }

    )
    console.log(form);
  }
  return <>
  <Nav/>
  <div className='container'>
    <div className='text-center mb-3'>Add user</div>
    <Form>
      <Form.Group className="mb-3 " >
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={form.name} className='' type="text"  onChange={handleChange} placeholder="Enter name" />

      </Form.Group>
      <Form.Group className="mb-3 " >
        <Form.Label>Username</Form.Label>
        <Form.Control name="username" value={form.userName} className='' type="text" onChange={handleChange} placeholder="Enter Username" />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone"  value={form.phone} type="text" onChange={handleChange} placeholder="Enter phone number" />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label>Location</Form.Label>
        <div className='d-flex'>
          <div>
          <Form.Group className="mb-3 " >
        <Form.Label>City</Form.Label>
        <Form.Control name="city"  value={form.location.city}  type="text"  onChange={handleChange}placeholder="Enter city" />
      </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mx-3" >
        <Form.Label>Street</Form.Label>
        <Form.Control name="street" value={form.location.street} type="text" onChange={handleChange} placeholder="Enter street " />
      </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mx-3" >
        <Form.Label> Zipcode</Form.Label>
        <Form.Control name="zipcode"  value={form.location.zipCode} type="text"  onChange={handleChange}placeholder="Enter zipcode " />
      </Form.Group>
          </div>
        </div>
        
      
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Company</Form.Label>
        <div className='d-flex'>
          <div>
          <Form.Group className="mb-3 " >
        <Form.Label>name</Form.Label>
        <Form.Control name="companyName" value={form.company.name} type="text"  onChange={handleChange}placeholder="Enter Company name " />
      </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mx-3" >
        <Form.Label>CatchPhrase</Form.Label>
        <Form.Control name="catchPhrase" type="text" value={form.company.CatchPhrase}  onChange={handleChange}placeholder="Enter catchPhrase " />
      </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mx-3">
        <Form.Label>bs</Form.Label>
        <Form.Control  name="bs" type="text" value={form.company.bs}  onChange={handleChange} placeholder="Enter bs " />
      </Form.Group>
          </div>
        </div>
        
       
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Website Url</Form.Label>
        <Form.Control name="website" value={form.Website}  type="text" onChange={handleChange} placeholder="Enter Webiste URL" />
      </Form.Group>
      <div className='btn btn-primary' onClick={handleAdd}>Submit</div>
    </Form></div>
    </>
}

export default Add;