import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
export const Navigation = () => {
  return (
    <Router>
     
        <Route path="/" element={<Home />} exact />
        <Route path="/login-user" element={<SignIn />} exact />
        <Route path="/register-user" element={<SignUp />} exact />
      
    </Router>
  )
}
