import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
}

body{
    background:#fff;
    color:hsl(192,100%,9%);
    font-size:1.15em;
    font-family:'Poppins',sans-serif;
    margin:0;

}

p{
    opacity:0.6;
    line-height:1.5;
}

img{
    max-width:100%;
}

`

export default GlobalStyles;