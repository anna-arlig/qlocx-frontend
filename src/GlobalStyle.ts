import { createGlobalStyle } from 'styled-components';
import colors from './constants/colors';

const GlobalStyle = createGlobalStyle`
body, html {
box-sizing: border-box;
outline: 0px;
margin: 0px;
padding: 0px;
border: 0px;
background-color: ${colors.primary.background_green};
}
`;
export default GlobalStyle;