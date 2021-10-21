import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import modalimgsrc from "../custom/modal.jpg";
import FormLogin from "../custom/formlogin";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function Login() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const title = "Login";
  const text = "the modal can be used for overlay interfaces";
  const buttontext = "login";
  const modalimg = modalimgsrc;

  return (
    <div>
      <Container>
        <FormLogin />
      </Container>
    </div>
  );
}

export default Login;
