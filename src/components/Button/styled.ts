import styled from 'styled-components'
import colors from '../../constants/colors';

export const ButtonContainer = styled.button`
  background-color: ${colors.primary.medium_green};
  border-color: ${colors.primary.medium_green};
  color: ${colors.primary.dark_green};
  border-style: solid;
  width: 387px;
  border-radius: 5px;
  height: 54px;
  text-align: center;
  font-family: 'Avenir', sans-serif; 
  font-size: 20px;
  margin-top: 50px;
  &:hover {
    color: ${colors.primary.white};
    background-color: ${colors.primary.dark_green_opacity};
    border-color: ${colors.primary.dark_green_opacity};
  }
`;
