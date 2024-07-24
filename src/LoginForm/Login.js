import React from "react";
import { useState } from "react";
import Register from "../RgisterForm/Register";
import "./Login.css";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  {
    <Register />;
  }
  const [userName, setUserName] = useState();
  const [userNameErr, setUserNameErr] = useState();
  const [show, setShow] = useState();

  function UserHandler(e) {
    const name = e.target.value;
    if (name.length < 4) {
      setUserNameErr(true);
    } else {
      setUserNameErr(false);
    }
    setUserName(name);
  }

  function submithandler(e) {
    e.preventDefault();
    // if (userName.length < 4) {
    //   alert(" UserName or Password Erorr ! ");
    // } else {
    //   alert("Login Sucess");
    // }

    try {
      const password = document.getElementById("password").value;
      if (userName === undefined || password === undefined) {
        throw "Please Enter All required detailes !";
      }
      if (userName.length < 4 || password === "") {
        // alert(" UserName or Password Erorr ! ");
        throw "UserName or Password Erorr !";
      } else {
        alert("Login Sucess");
      }
    } catch (Erorr) {
      alert(Erorr);
    }
    // finally {
    //   //it executes while error occures and also error deos't occure{simply it executes all time }
    //   alert("");
    // }
  }
  function toggle(e) {
    e.preventDefault();
    setShow(!show);
  }
  return (
    <div>
      <form>
        <div className="card">
          <h3>Login Form</h3>
          <input type="text" placeholder="User Name" onChange={UserHandler} />
          {userNameErr ? <p>!</p> : null}
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            id="password"
          />
          <label onClick={toggle} id="lable">
            {show ? <FaEyeSlash /> : <FaRegEye />}
          </label>

          <button type="submit" onClick={submithandler}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
