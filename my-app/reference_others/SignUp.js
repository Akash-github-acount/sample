import React from "react"
import { useState,useEffect } from "react";
import form from "bootstrap"
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Home from "./Home";
import base_url from "../src/Components/links";
//import axios from "axios";
import { toast } from "react-toastify";
import { FormGroup } from "react-bootstrap";


const SignUp=()=>{
    const initialValues={firstname:"",lastname:"",email:"",password:"",confirmpassword:""};
const[formValues,setFormValues]=useState(initialValues);
const[formErrors,setFormErrors]=useState({});
const[isSubmit,setIsSubmit]=useState(false);
useEffect(()=>{
    document.title="Register New User || Welcome to our Ecommerce Website"
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
  const validate=(values)=>{
    const errors={};
    var count=0;
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.firstname) {
        errors.firstname = "firstname is required!";
        count++;
      }
      if (!values.lastname) {
        errors.lastname = "lastname is required!";
        count++;
      }
      if (!values.email) {
        errors.email = "Email is required!";
        count++;
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
        count++;
      }
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
      if (!values.confirmpassword) {
        errors.confirmpassword = "Confirm Password is required!";
        count++;
      } else if (values.confirmpassword.length < 5) {
        errors.confirmpassword = "Password must be more than 5 characters";
        count++;
      } else if (values.confirmpassword.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
        count++;
      }
      else if (values.password!==values.confirmpassword) {
        errors.confirmpassword = "Password must Match!!";
        count++;
      }
      if(count===0)
      {
        postDataToServer(formValues);
      }
      else{
          console.log(count);
      }
      return errors;
  };
  
  //creating function to post data on server
  const postDataToServer=(data)=>{
       console.log("formvalues are:"+formValues);
       console.log("data is:"+data);
      // axios.post(`${base_url}/newuser`,data).then(
      //     (response)=>{
      //         //success message
      //         console.log(response);
      //         console.log("success");
      //         toast.success("user has been added!");
      //     },
      //     (error)=>{
      //         console.log(error);
      //         console.log("error");
      //         toast.error("user not added!some error occured!");
      //     }
      // )
  };
  
        return (
            <>
            <fieldset>
            <form onSubmit={handleSubmit}>
                {/* <Home/> */}
                <h3>Register</h3>
               
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstname" value={formValues.firstname} onChange={handleChange}/>
                </div>
                <p style={{color:"red"}}>{formErrors.firstname}</p>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastname" value={formValues.lastname} onChange={handleChange}/>
                </div>
                <p style={{color:"red"}}>{formErrors.lastname}</p>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={formValues.email} onChange={handleChange}/>
                </div>
                <p style={{color:"red"}}>{formErrors.email}</p>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={formValues.password} onChange={handleChange}/>
                </div>
                <p style={{color:"red"}}>{formErrors.password}</p>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="confirmpassword" value={formValues.confirmpassword} onChange={handleChange}/>
                </div>
                <p style={{color:"red"}}>{formErrors.confirmpassword}</p>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login-user">log in?</a>
                </p>
            </form>
            </fieldset>
            </>
        );
    }
export default SignUp