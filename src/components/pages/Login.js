import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div className="row2">
      <div className="col-md-6 p-5 m-auto shadow-lg my-5">
      <main className="form-signin w-md-50 m-auto">
        <form>
          <img className="mb-4" src="./Slider images/velvets logo.png"alt=""width="72"height="57"/>
          <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

          <div className="form-floating">
             <input type="email"className="form-control"id="floatingInput"placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password"className="form-control"id="floatingPassword"placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-dark" type="submit">
            Sign in
          </button>

          <div className="d-flex justify-content-between">

            <span>Do not have an account? <Link to ='/register'>Register here</Link></span>

            <span> <Link to ='/forgetpassword'>Forget password</Link></span>

          </div>
        </form>
      </main>
      </div>
      </div>

    </>
  );
}

export default Login;
