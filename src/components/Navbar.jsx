import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // variable user
    const user=JSON.parse(localStorage.getItem("user"))
    console.log(user)
  return (
    <div className='row '>
        <div className='col-md-12 '>
            <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid ">
    <a class="navbar-brand text-white" href="#">Jewelly Project</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/addproducts">Add products</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link text-white" to="/signin">Signin</Link>
        </li>
        <li class="nav-item d-flex ms-auto">
          <Link class="nav-link text-white ms-auto me-2 "  to="/signup">Signup</Link>

          <button type="button" class="btn btn-primary">
        Notifications <span class="badge text-bg-secondary">2</span>
</button>
        </li>
      </ul>
    </div>
  </div>
   <h2 className='text-white'>{user?.user_name}</h2>
</nav>
   
        </div>

        
    </div>
  )
}

export default Navbar