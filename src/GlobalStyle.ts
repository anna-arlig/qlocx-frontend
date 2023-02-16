import { createGlobalStyle } from 'styled-components';
import colors from './constants/colors';

const GlobalStyle = createGlobalStyle`
body, html {
box-sizing: border-box;
outline: 0;
margin: 0;
padding: 0;
border: 0;
background-color: ${colors.primary.background_green} ;
}
`;
export default GlobalStyle;