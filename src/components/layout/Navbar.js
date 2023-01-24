import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <div className="container-fluid bg-info">
      <div className="row">
        <div className="col-md-3 text-center ">
          <Link className="navbar-brand text-white fs-2 fw-bold" to="/"> Velvets Cafe</Link>
          <span>

          

        <img className="mb-4" src=" ./slider images/velvets logo.png"alt=""width="72"height="57"/>

        </span>
        </div>
        <div className="col-md-6 py-1">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-md-3 d-flex justify-content-evenly">
          <Link to ={'/signin'}><i className='bi bi-box-arrow-in-left text-white fs-3'></i></Link>
          <Link to ={'/register'}><i className='bi bi-person-plus text-white fs-3'></i></Link>

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
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

              <Link className="nav-link" to="/faq">
                FAQ
              </Link>

              <Link className="nav-link" to="/about">
                About 
              </Link>


              <Link className="nav-link" to="/contact">
                Contact
              </Link>

          </ul>
        </div>
      </div>
    </nav></>
  )
}

export default Navbar