import styled from 'styled-components'
import colors from '../../constants/colors';

type Props = {
  type: string;
  placeholder: string;
  name: string
};

export const InputContainer = styled.input.attrs<Props>(props => ({ 
  type: props.type,
  placeholder: props.placeholder,
  name: props.name
}))`
  background-color: ${colors.primary.white};
  color: ${colors.primary.dark_green};
  width: 378px;
  border-color: ${colors.primary.dark_green_opacity};
  border-style: solid;
  height: 50px;
  margin-bottom: 40px;
  padding-left: 10px;
  font-family: 'Avenir', sans-serif; 
  font-size: 16px;
`;
