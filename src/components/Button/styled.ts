import styled from 'styled-components'
import colors from '../../constants/colors';

export const ButtonContainer = styled.input.attrs({ 
  type: 'submit',
  value: 'Logga in'
})`
  background-color: ${colors.primary.medium_green};
  color: ${colors.primary.dark_green};
  width: 382px;
  border-radius: 5px;
  border-color: transparent;
  height: 50px;
  text-align: center;
  font-family: 'Avenir', sans-serif; 
  font-size: 20px;
  &:hover {
    background-color: ${colors.primary.dark_green_opacity};
    color: ${colors.primary.white};
  }
`;
