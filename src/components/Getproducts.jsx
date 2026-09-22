import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Getproducts = () => {

  // states
  const [loading,setLoading]=useState("")
  const [error,setError]=useState("")
  const [products,setProducts]=useState([])


  // use navigate
  const navigate=useNavigate()

  const Getproducts=async()=>{
    setLoading("Please wait,we are reviewing your products...")


    try {

      const responce=await axios.get("https://emmah07.alwaysdata.net/api/get_product_details")
      console.log(responce);
      setProducts(responce.data)
      
    } catch (error) {
      
    }
  }



  useEffect(()=>{
    Getproducts()
  },[])

  

  const imgurl='https://emmah07.alwaysdata.net/static/images/'
  return (
    <div className='row'>
      <h4>Availabe Products</h4>

      {/* Product card */}
      {products.map((product)=>(
    <div className='col-md-3 justify-content-center mb-2'>
      <div className='card shadow m-2'>
      <img src={imgurl+product.product_photo} alt="" />
        <div className='card-body'>
          <h4 className='mt-2'>{product.product_name}</h4>
          <p className='text-muted'>{product.product_description}</p>
          <b className='text-danger'>{product.product_cost}</b> <br />
          <button className='btn btn-outline-warning' onClick={()=>navigate("/Mpesa",{state:{product}})}>Purchase Now</button>





            </div>

          </div>

        </div>))}
  
    </div>
  )
}

export default Getproducts