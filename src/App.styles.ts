import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --gray: #f6f6f7; 
    --pink: #fa54f1;
    --purple: #653fe6
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    font-family: 'Dosis', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const Container = styled.div` 
  width: 600px;
  margin: 40px auto;
`;

export {
  GlobalStyle,
  Container
}