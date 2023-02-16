import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { LoginContainer } from "./styled";

function LoginPage() {
  return (
    <LoginContainer>
      <Input type={"text"} placeholder={"Användarnamn"} />
      <Input type={"password"} placeholder={"Lösenord"} />
      <Button />
    </LoginContainer>
  );
}

export default LoginPage;
