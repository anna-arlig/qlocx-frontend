import styled from 'styled-components'
import colors from '../constants/colors';

export const Logo = styled.h1`
  margin: 0px;
  font-size: 64px;
  color: ${colors.primary.dark_green};
  font-family: 'Avenir', sans-serif;                                               
`;

export const Body = styled.p`
  margin: 0px;
  padding: 5px;
  font-size: 16px;
  color: ${colors.primary.dark_green};
  font-family: 'Avenir', sans-serif;                                               
`;

export const ErrorText = styled.p`
  margin: 0px;
  padding-bottom: 15px;
  font-size: 20px;
  color: ${colors.primary.error_red};
  font-family: 'Avenir', sans-serif;                                               
`;
