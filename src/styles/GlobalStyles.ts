import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Thin.ttf') format('truetype');
        font-weight: 100;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-ExtraLight.ttf') format('truetype');
        font-weight: 200;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-ExtraBold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
    }
  
    :root {
        font-family: Montserrat, sans-serif;
        line-height: 1.5;
        font-weight: 400;
               
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
    
    #root {
        width: 100%;
    }
    
    a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
    }
    a:hover {
        color: #535bf2;
    }
    
    body {
        margin: 0;
        place-items: center;
        width: 100%;
        background: #fff;
        box-sizing: border-box;
    }
    
    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }
    
    button {
      cursor: pointer;
    }
    
    @media (prefers-color-scheme: light) {
        :root {
            /*color: #213547;*/
            background-color: #ffffff;
        }
        a:hover {
            color: #747bff;
        }
        button {
            background-color: #f9f9f9;
        }
    }
    
    p, h6 {
      margin: 0;
    }
`;

export default GlobalStyles;
