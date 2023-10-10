import React from 'react'
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate

const SignUp = () => {
  return (
    <>
    
    <div>
        <div className="sigincontainer">
          <h1>
            <h2>Sign Up</h2>

            <div className="userinput">
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
              />
              <br />
              <input type="text" placeholder="Last Name" />
              <br />
              <input type="E-mail" placeholder="Email" />
              <br />
              <input type="password" placeholder="Password" />
              <br />
            </div>

            <div className="main-check">
              <div className="s-check" >
                <input className="check-css" type="checkbox" />
                <span className="span-tag" >Remember me</span>
              </div>

              <div className="span-class" >
                <span className="span-tag" >
                <Link to="/" style={{textDecoration:'none'}}>Already a member?</Link>   
                </span>
              </div>
            </div>

            {/* <div className="checkbox">
              <div className="remember">
              <input type="checkbox" />
              <span>Remember me </span>
              </div>
              <div className="forget">
                <span>Forgot password?</span>
              </div>
            </div> */}

            <div className="login">
              <button>Sign Up</button>
            </div>
            <div className="donot">
              <p>Don't have an account</p>
            </div>
          </h1>
        </div>
      </div>
      
    </>

  );
}

export default SignUp
