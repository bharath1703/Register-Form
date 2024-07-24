import React from "react";
import { useState } from "react";
import "./Register.css";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [name, setName] = useState();
  const [nameErr, setNameErr] = useState(false);
  const [password, setPassword] = useState();
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordMatchErr, setPasswordMatchErr] = useState(false);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  function NameHandler(e) {
    const item = e.target.value;
    if (item.length < 4) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(item);
  }
  function PasswordHandler(e) {
    const pass = e.target.value;
    if (pass.length < 6) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(pass);
  }
  function PasswordMatch(e) {
    let pass = document.getElementById("pass").value;
    let passwordd = document.getElementById("password").value;
    if (pass != passwordd) {
      setPasswordMatchErr(true);
    } else {
      setPasswordMatchErr(false);
    }
  }
  function submitHandler(sub) {
    {
      sub.preventDefault();
      let pass = document.getElementById("pass").value;
      let passwordd = document.getElementById("password").value;
      try {
        if (
          name === undefined ||
          password === undefined ||
          name === "" ||
          password === ""
        ) {
          throw "Please entert All required  detailes !";
        }
        if (name.length < 4 || password.length < 6 || pass != passwordd) {
          throw "Please Enter Vallid detailes !";
        } else {
          throw "Sucessfully registerd";
        }
      } catch (Erorr) {
        alert(Erorr);
      }
    }
  }
  function Show(e) {
    {
      e.preventDefault(e);
      setShow(!show);
    }
  }
  function ShowMatch(e) {
    {
      e.preventDefault(e);
      setVisible(!visible);
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="card">
        <h3>Register</h3>
        <div>
          <input type="text" placeholder="Name" onChange={NameHandler} />
          {nameErr ? <span>!</span> : null}
        </div>
        {/* .....Email....... */}

        <div>
          <input type="email" placeholder="Mail Id" />
        </div>
        {/* ......Password........ */}

        <div>
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={PasswordHandler}
            id="pass"
          />
          <label onClick={Show}>{show ? <FaEyeSlash /> : <FaRegEye />}</label>
          {passwordErr ? <span>!</span> : null}
        </div>
        {/* ......Confirm password..... */}

        <div>
          <input
            type={visible ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={PasswordMatch}
            id="password"
          />
          <label onClick={ShowMatch}>
            {visible ? <FaEyeSlash /> : <FaRegEye />}
          </label>
          {passwordMatchErr ? <span>!</span> : null}
          <h4 id="passwordshow"></h4>
          {/* .......Toggle btn..... */}
        </div>
        {/* .....Submit Btn..... */}
        <button type="submit" id="signupbtn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
