import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <>
     <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 text-start ">
          <Link className="navbar-brand text-white fs-2 fw-bold"to="/"> Velvet's Cafe</Link>
          <span>
        <img className="mb-4" src=" ./slider images/velvets logo.png"alt=""width="72"height="57"/>
        </span>
        </div>
        {/* <div className="col-md-6 py-1">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div> */}
        <div className="col-md-3 d-flex justify-content-center">
          <div className='nav-item fs-6 text-dark'>
          <Link to ={'/signin'}><i className='bi bi-key text-light fs-2'></i>Log In</Link>
          </div>
          <div  className='nav-item fs-6 text-dark'>
          <Link to ={'/register'}><i className='bi bi-lock text-light fs-3'></i>Sign Up</Link>
          </div>
          <div  className='nav-item fs-6 text-dark'>
          <Link to ={'/notification'}><i className='bi bi-bell text-light fs-3'></i>Notifications</Link>
          </div>

          </div>
      </div>
    </div>

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>

              <Link className="nav-link active" to="/faq">
                FAQ
              </Link>

              <Link className="nav-link active" to="/about">
                About 
              </Link>

              <Link className="nav-link active" to="/contact">
                Contact
              </Link>

          </ul>
        </div>
      </div>
    </nav></>
  )
}

export default Navbar