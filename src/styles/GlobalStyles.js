import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import {
  primaryDarkColor,
  primaryColor,
  successColor,
  errorColor,
} from '../config/colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${primaryDarkColor};
    color: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;

  }
  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    color: #fff;
    border-radius: 4px;
    padding: 10px 20px;
    font-weight: 700;
    transition: all 300ms;
  }
  button:hover{
    filter: brightness(75%);
  }

  a{
    text-decoration: none;
    color: ${primaryColor};
  }

  ul{
    list-style: none;
  }

  body .Toastify__toast-container .Toastify__toast--success {
    background : ${successColor}
  }
  body .Toastify__toast-container .Toastify__toast--error {
    background : ${errorColor}
  }


`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
