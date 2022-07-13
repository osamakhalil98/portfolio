import styled from "@emotion/styled";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .nav-item > h5{
      transition: all 0.50s linear;
  }
  .aboutInfoImg{
    box-shadow:${({ theme }) => theme.homeImg};
  }
  .bgTitleColor{
      background:${({ theme }) => theme.bgTitleColor};
      border-radius:4px;
  }
  .navbar{
      background:${({ theme }) => theme.nav};
      box-shadow:${({ theme }) => theme.lightBoxSh};
  }
  #nav-toggle{
     color:${({ theme }) => theme.text};
  }
  .skillsTitle{
    background:${({ theme }) => theme.bgTitleColor};
    border-radius:4px;
    margin-bottom:10px;
    padding:2px 8px;
  }
  
  .textSpan{
color:${({ theme }) => theme.textspan}
  }
  .icons{
    color:${({ theme }) => theme.iconColor}
  }
  `;
