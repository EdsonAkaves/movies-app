import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #1F1D2B;
        font-family: Arial, Helvetica, sans-serif;
    }



    a {
        text-decoration: none;
        transition: .5s;
        color: #fff;
    }

    a:hover {
        color: #188BD6;
    }

    p {
        color: #fff;
    }

`

export default GlobalStyle