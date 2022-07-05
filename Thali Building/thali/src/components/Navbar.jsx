import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    const counts = useSelector((state)=>state.thali.item)
 

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><b>THALS</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
        </li>
        </ul>
      <form className="d-flex">
     
          <Link className="nav-link active " style={{color:'black'}} aria-current="page" to="./Cart">Order<sup style={{fontSize:'1.5rem'}}>{counts.length}</sup></Link>
        
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Outlet />
    </div>
  )
}

export default NavBar
