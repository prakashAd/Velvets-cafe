import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div className="row">
      <div className="col-md-6 p-5 m-auto shadow-lg my-5">
      <main className="form-signin w-md-50 m-auto">
        <form>
          <img className="mb-4" src="./online pasal image/images.png"alt=""width="72"height="57"/>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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
          <button className="w-100 btn btn-lg btn-success" type="submit">
            Sign in
          </button>

          <div className="d-flex justify-content-between">

            <span>Do not have an account? <Link to ='/register'>Register here</Link></span>

            <span> <Link to ='/forgetpassword'>Forget password</Link></span>

          </div>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
      </div>
      </div>

    </>
  );
}

export default Login;
