import React from "react"
import { useState,useEffect } from "react";
import form from "bootstrap"
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import base_url from "./links";
import axios from "axios";
import { toast } from "react-toastify";

const LoginFormNew=()=>{
  //toast.error("user not added!some error occured!");
const initialValues={name:"",password:""};
const[formValues,setFormValues]=useState(initialValues);
const[formErrors,setFormErrors]=useState({});
const[isSubmit,setIsSubmit]=useState(false); 


useEffect(()=>{
  document.title="Add New User || Welcome to our Ecommerce Website"
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
const postDataToServer=(data)=>{
     console.log("formvalues are:"+formValues);
     console.log("data is:"+data);
    axios.post(`${base_url}/newuser`,data).then(
        (response)=>{
            //success message
            console.log(response);
            console.log("success");
            toast.success("user has been added!");
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("user not added!some error occured!");
        }
    )
};

return(
  <>
  {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
    <form onSubmit={handleSubmit}>
      <Home/>
  <div class="col-xs-2">
  <label for="exampleInputEmail1" class="form-label">User Name</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={formValues.name} onChange={handleChange}/>
  
  </div>
  <p style={{color:"red"}}>{formErrors.name}</p>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={formValues.password} onChange={handleChange}/>
  </div>
  <p style={{color:"red"}}>{formErrors.password}</p>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</>
);
}

export default LoginFormNew