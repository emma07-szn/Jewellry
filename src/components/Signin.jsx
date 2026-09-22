import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
    const [loading,setLoading]=useState("")
    const [success,setSuccess]=useState("")
    const [error,setError]=useState("")


    // navigate hook
    const navigate=useNavigate()


    // variables
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    // functions to handle submit
    const handlesubmit=async (e)=>{
      e.preventDefault()
      setLoading("Please wait...")
      setError("")

      // form data
      const formData= new FormData()

      formData.append("email",email)
      formData.append("password",password)

      try {
        

        const responce=await axios.post("http://emmah07.alwaysdata.net/api/signin",formData)

        setLoading("")
        if(responce.data.user){
          setSuccess(responce.data.message)
          navigate("/")
          localStorage.setItem("user",JSON.stringify(responce.data.user))
        }
        else{
          setError(responce.data.message)
        }

      } catch (error) {
        setError(error.message)
        setLoading("")
        
      }
    }

  return (
    <div className='row mt-3 justify-content-center'>
      <div className='col-md-6 card shadow p-4'>
        <h3>Signin</h3>

        <form action="" onSubmit={handlesubmit}>

        {/* bidding */}
        <h4 className='text-success'>{success}</h4>
        <h4 className='text-primary'>{loading}</h4>
        <h4 className='text-danger'>{error}</h4>

        <input type="email" placeholder='Enter your Email' className='form-control' required onChange={(e)=>setEmail(e.target.value)} /> <br />

        <input type="password" placeholder='Enter your password' className='form-control' required onChange={(e)=>setPassword(e.target.value)} /> <br />

        <button type='Submit' className='btn btn-outline-warning w-40'>submit</button>

      <p>I don't have an account <Link to="/signin">Signin</Link></p>


      </form>


      </div>

    </div>
  )
}

export default Signin