import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const navigate = useNavigate();
  return (
    <AdminLoginContainer>
      <form>
        <FormItem>
          <label>Email</label>
          <input type="email" />
        </FormItem>
        <FormItem>
          <label>Password</label>
          <input type="password" />
        </FormItem>
        <button type="submit">Login</button>
      </form>
      <Close onClick={() => navigate(-1)}>X</Close>
    </AdminLoginContainer>
  );
};

const AdminLoginContainer = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background-color: #1b7272;
  display: grid;
  place-content: center;
  form {
    button {
      margin: 0;
    }
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  label {
    color: white;
  }
  input {
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
  cursor: pointer;
`;
