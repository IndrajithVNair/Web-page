import React from "react";
import "./formlogin.css";
// import styled from "styled-components";

// const container = styled.div`
//   width: 900px;
//   height: 600px;
//   align-items: center;
//   justify-content: center;
// `;
// const formcontentright = styled.div`
//   margin-left: 50%;

// `;
function FormLogin() {
  return (
    <div className="container">
      <div className="formcontentright">
        <form className="form">
          <h1>
            Get started withus today! Create yout account by filling out the
            information below
          </h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
