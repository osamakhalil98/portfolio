import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .nav-item > h5{
     color:${({ theme }) => theme.text};
      transition: all 0.50s linear;
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
  `;
