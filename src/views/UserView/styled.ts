import styled from 'styled-components'
import colors from '../../constants/colors';

export const UserContainer = styled.div`
height: 70vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const WelcomeText = styled.h2`
  margin: 0px;
  padding-bottom: 40px;
  font-size: 24px;
  color: ${colors.primary.dark_green};
  font-family: 'Avenir', sans-serif;                                               
`;