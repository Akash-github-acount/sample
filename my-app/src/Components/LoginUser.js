import React from 'react'
import { Form,Button } from 'react-bootstrap'
//import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
//import axios from "axios";
import base_url from "./links";


const LoginUser = () => {
  const initialValues={name:"",password:""};
const[formValues,setFormValues]=useState(initialValues);
const[formErrors,setFormErrors]=useState({});
const[isSubmit,setIsSubmit]=useState(false);


useEffect(()=>{
  document.title="Login User || Welcome to our Ecommerce Website"
})
const handleChange=(e)=>{
  const{name,value}=e.target;
  setFormValues({...formValues,[name]:value});
  console.log(formValues);
};

const handleSubmit=(e)=>{
  
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

useEffect(()=>{
  if(Object.keys(formErrors).length===0 && isSubmit)
  console.log(formValues);
}

)

const validate=(values)=>{
  const errors={};
  var count=0;
 //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
      count++;
    }
    // if (!values.email) {
    //   errors.email = "Email is required!";
    // } else if (!regex.test(values.email)) {
    //   errors.email = "This is not a valid email format!";
    // }
    if (!values.password) {
      
      errors.password = "Password is required";
      count++;
    } else if (values.password.length < 5) {
      
      errors.password = "Password must be more than 5 characters";
      count++;
    } else if (values.password.length > 10) {
      
      errors.password = "Password cannot exceed more than 10 characters";
      count++;
    }
    // if (!values.confirmpassword) {
    //   errors.confirmpassword = "Confirm Password is required!";
    // } else if (values.confirmpassword.length < 5) {
    //   errors.confirmpassword = "Password must be more than 5 characters";
    // } else if (values.confirmpassword.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    // else if (values.password!==values.confirmpassword) {
    //   errors.confirmpassword = "Password must Match!!";
    // }
    if(count===0)
    {
      postDataToServer(formValues);
    }
    
    return errors;
};

//creating function to post data on server
// const postDataToServer=(data)=>{
//      console.log("formvalues are:"+formValues);
//      console.log("data is:"+data);
//     axios.post(`${base_url}/newuser`,data).then(
//         (response)=>{
//             //success message
//             console.log(response);
//             console.log("success");
//            // toast.success("user has been added!");
//         },
//         (error)=>{
//             console.log(error);
//             console.log("error");
//            // toast.error("user not added!some error occured!");
//         }
//     )
// };
  return (
    <div className="mb-3">
    <Form onSubmit={handleSubmit} >
  <Form.Group className="mb-3" controlId="User">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" name="name" width="10"/>
   
  </Form.Group>
  <p style={{color:"red"}}>{formErrors.name}</p>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" />
  </Form.Group>
  <p style={{color:"red"}}>{formErrors.password}</p>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  )
}

export default LoginUser
