import React from "react";
import { Link} from "react-router-dom"; // Import Link and useNavigate
import SignOrg from "../../organisms/signinorg/SignOrg";
import UserName from "../../atomic/username/UserName";
import Password from "../../atomic/password/Password";

const Signin = () => {


  return (
    <>
      {/* <SignOrg/> */}

      <div>
        <div className="sigincontainer">
          <h1>
            <h2>Signin</h2>

            <div className="userinput">
              <UserName />
              <br />
              <Password />
              <br />
            </div>

            <div className="main-check">
              <div className="s-check">
                <input className="check-css" type="checkbox" />
                <span className="span-tag">Remember me</span>
              </div>

              <div className="span-class">
                <span className="span-tag">
                  Forgot Password?
                </span>
              </div>
            </div>
            <div className="login">
              <button>Log in</button>
            </div>
            <div className="donot">
              {/* Add a Link to the "signup" page */}
              <p style={{paddingBottom:'10px'}}>
                 <Link to="/signup" style={{textDecoration:'none'}}>Don't have an account?</Link>
              </p>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Signin;
