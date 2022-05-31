import React, { useState } from "react";
import {Redirect} from "react-router-dom";
// import { Route } from "react-router-dom";
// import ReactDOM from "react-dom";
import "./Form.css";


function Form() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin",
      password: "admin123"
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit} >
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" placeholder="Enter username" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" placeholder="Enter password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
        <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        
      </form>
    </div>
  );

  return (
      
    <div className="app"><h1 className='text fontfam' style={{color:"white",marginBottom:'20px',marginTop:'20px'}}>Fish Tank Portal</h1>
        <React.Fragment>
      <div>
        <div className="title login-form"><h2 align="center">Sign In</h2>
          {isSubmitted ? <div><Redirect to="/tanks"/></div> : renderForm}
        </div>
      </div>
      </React.Fragment>
    </div>
  );
}

export default Form;