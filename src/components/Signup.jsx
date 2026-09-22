import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // states
  const [success,setSuccess]=useState("")
  const [loading,setLoading]=useState("")
  const [error,setError]=useState("")


  // variables for input
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")

  // function to submit
  const handlesubmit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait..")
    setError("")


    // form data
    const formData=new FormData

    formData.append("username",username)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("phone",phone)

    try {
      const responce=await axios.post("http://emmah07.alwaysdata.net/api/signup",formData)

      setLoading("")
      setSuccess(responce.data.success)

    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }

  }

  return (
    <div className='row mt-4 justify-content-center'>
      <div className='col-md-6 card shadow p-4'>
        <h2>Signup</h2>



        {/* form */}
        <form action="" onSubmit={handlesubmit}>

          {/* BINDING */}
          <h4 className='text-primary'>{success}</h4>
          <h4 className='text-secondary'>{loading}</h4>
          <h4 className='text-danger'>{error}</h4>

          <input type="text" placeholder='Enter username' className='form-control' onChange={(e)=>setUsername(e.target.value)} /> <br />

          <input type="email" placeholder='Enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)} /> <br />

          <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)} /> <br />

          <input type="tel" placeholder='Enter Phone number' className='form-control' onChange={(e)=>setPhone(e.target.value)} /> <br />

          <button type='submit' className='btn btn-outline-warning w-40'>Signup</button>

          <p>Already have an account <Link to="/signin">Signin</Link></p>
        </form>
        </div>

    </div>
  )
}

export default Signup