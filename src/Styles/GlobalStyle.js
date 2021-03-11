import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    button:focus,
    input:focus,
    select:focus,
    option:focus {
        outline : none;
    }
`;