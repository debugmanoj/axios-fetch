import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from '../Common/CommonBar'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
let APIURL="https://6598d30ca20d3dc41ceefd10.mockapi.io/v1/EmployeeCity"

function Add() {
  let [data,setData]=useState([])
  let navigate = useNavigate()
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
  let datas=async()=>{
    try {
      let value=await axios.post(APIURL,form)
      if(value.status===201)
      {
        
        navigate('/')
      }
    } catch (error) {
      
    }
  }

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
          userName:prevForm.userName,
          email:prevForm.email,
          street:prevForm.street,
          city:prevForm.city,
          zipcode:prevForm.zipcode,
          phone: prevForm.phone,
          CatchPhrase:prevForm.CatchPhraset,
          CompanyName:prevForm.CompanyName,
          bs:prevForm.bs,
          website:prevForm.website,
        }
      }
      else if(name==="username"){
        return {
          name: prevForm.name,
          userName:value,
          email:prevForm.email,
          street:prevForm.street,
          city:prevForm.city,
          zipcode:prevForm.zipcode,
          phone: prevForm.phone,
          CatchPhrase:prevForm.CatchPhraset,
          CompanyName:prevForm.CompanyName,
          bs:prevForm.bs,
          website:prevForm.website,
        }
      }
      else if(name==="phone"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          email:prevForm.email,
          street:prevForm.street,
          city:prevForm.city,
          zipcode:prevForm.zipcode,
          phone: value,
          CatchPhrase:prevForm.CatchPhraset,
          CompanyName:prevForm.CompanyName,
          bs:prevForm.bs,
          website:prevForm.website,
        }
      }
      else if(name==="Email"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          email:value,
          street:prevForm.street,
          city:prevForm.city,
          zipcode:prevForm.zipcode,
          phone: prevForm.phone,
          CatchPhrase:prevForm.CatchPhraset,
          CompanyName:prevForm.CompanyName,
          bs:prevForm.bs,
          website:prevForm.website,
        }
      }
      else if(name==="city"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          email:prevForm.email,
          street:prevForm.street,
          city:value,
          zipcode:prevForm.zipcode,
          phone: prevForm.phone,
          CatchPhrase:prevForm.CatchPhraset,
          CompanyName:prevForm.CompanyName,
          bs:prevForm.bs,
          website:prevForm.website
        }
      }
      else if(name==="street"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          email:prevForm.email,
          street:value,
          city:prevForm.city,
          zipcode:prevForm.zipcode,
          phone: prevForm.phone,
          CatchPhrase:prevForm.CatchPhraset,
          CompanyName:prevForm.CompanyName,
          bs:prevForm.bs,
          website:prevForm.website,
        }
      }
      else if(name==="zipcode"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          email:prevForm.email,
          street:prevForm.street,
          city:prevForm.city,
          zipcode:value,
          phone: prevForm.phone,
          CatchPhrase:prevForm.CatchPhraset,
          CompanyName:prevForm.CompanyName,
          bs:prevForm.bs,
          website:prevForm.website,
        }
      }
      else if(name==="companyName"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          email:prevForm.email,
          street:prevForm.street,
          city:prevForm.city,
          zipcode:prevForm.zipcode,
          phone: prevForm.phone,
          CatchPhrase:prevForm.CatchPhraset,
          CompanyName:value,
          bs:prevForm.bs,
          website:prevForm.website,
        }
      }
      else if(name==="catchPhrase"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          email:prevForm.email,
          street:prevForm.street,
          city:prevForm.city,
          zipcode:prevForm.zipcode,
          phone: prevForm.phone,
          CatchPhrase:value,
          CompanyName:prevForm.CompanyName,
          bs:prevForm.bs,
          website:prevForm.website
        }
      }
      else if(name==="bs"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          email:prevForm.email,
          street:prevForm.street,
          city:prevForm.city,
          zipcode:prevForm.zipcode,
          phone: prevForm.phone,
          CatchPhrase:prevForm.CatchPhrase,
          CompanyName:prevForm.CompanyName,
          bs:value,
          website:prevForm.website
        }
      }
      else if(name==="website"){
        return {
          name: prevForm.name,
          userName:prevForm.userName,
          email:prevForm.email,
          street:prevForm.street,
          city:prevForm.city,
          zipcode:prevForm.zipcode,
          phone: prevForm.phone,
          CatchPhrase:prevForm.CatchPhrase,
          CompanyName:prevForm.CompanyName,
          bs:prevForm.bs,
          website:value
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
        <Form.Label>Email</Form.Label>
        <Form.Control name="Email"  value={form.email} type="text" onChange={handleChange} placeholder="Enter Email" />
      </Form.Group>


      <Form.Group className="mb-3" >
      <Form.Label>Location</Form.Label>
        <div className='d-flex'>
          <div>
          <Form.Group className="mb-3 " >
        <Form.Label>City</Form.Label>
        <Form.Control name="city"  value={form.city}  type="text"  onChange={handleChange}placeholder="Enter city" />
      </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mx-3" >
        <Form.Label>Street</Form.Label>
        <Form.Control name="street" value={form.street} type="text" onChange={handleChange} placeholder="Enter street " />
      </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mx-3" >
        <Form.Label> Zipcode</Form.Label>
        <Form.Control name="zipcode"  value={form.zipCode} type="text"  onChange={handleChange}placeholder="Enter zipcode " />
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
        <Form.Control name="companyName" value={form.CompanyName} type="text"  onChange={handleChange}placeholder="Enter Company name " />
      </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mx-3" >
        <Form.Label>CatchPhrase</Form.Label>
        <Form.Control name="catchPhrase" type="text" value={form.CatchPhrase}  onChange={handleChange}placeholder="Enter catchPhrase " />
      </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mx-3">
        <Form.Label>bs</Form.Label>
        <Form.Control  name="bs" type="text" value={form.bs}  onChange={handleChange} placeholder="Enter bs " />
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