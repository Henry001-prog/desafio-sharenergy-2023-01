import { useEffect, useState } from "react";
import {
  Container,
  LoginContainer,
  Text,
  ContainerInput,
  FirstInput,
  SecondInput,
  ThirdInput,
  CreateUserButton,
  CreateUserText,
  Button,
  TextButton,
} from "./styles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createValidateRecoil,
  emailRecoil as emailRecoilState,
  passwordRecoil as passwordRecoilState,
  confirm_Password,
  validTokenRecoil,
  isLoading,
  tryLogin,
} from "../../store/userRecoil";

import { allApis } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

interface ILogin {
  email: string;
  password: string;
  token: string;
}

interface Props {
  pressButton: boolean;
  setPressButton: (value: boolean) => void;
  setShowNav: (value: boolean) => void;
}

export default function LoginPage({
  pressButton,
  setPressButton,
  setShowNav,
}: Props): JSX.Element {
  const [createValidate, setCreateValidate] =
    useRecoilState<boolean>(createValidateRecoil);
  const [email, setEmail] = useRecoilState<string>(emailRecoilState);
  const [password, setPassword] = useRecoilState<string>(passwordRecoilState);
  const [confirmPassword, setConfirmPassword] =
    useRecoilState<string>(confirm_Password);
  const [validToken, setValidToken] = useRecoilState<boolean>(validTokenRecoil);
  const [loading, setIsLoading] = useRecoilState<boolean>(isLoading);
  // const [test, setTest] = useState();
  // const [tokenT, setToken] = useState<string>();

  const navigate = useNavigate();
  const { apiAuthentication } = allApis;

  useEffect(() => {
    setShowNav(false);
    const getLogin = localStorage.getItem("login");
    if (getLogin) {
      const getLoginJson = getLogin != null ? JSON.parse(getLogin) : null;

      // setToken(getLoginJson.token);
      const { token }: ILogin = getLoginJson;
      async function verifyToken() {
        console.log("TokenLogin: ", token);
        if (token) {
          const validateToken = await apiAuthentication.post("/validateToken", {
            token,
          });
          if (validateToken.data.valid !== true && token !== "") {
            localStorage.clear();
            console.log("Logica: ", validateToken.data.valid === false, token);
            // setValidToken(validateToken.data.valid);
          }
          console.log("Test: ", validateToken.data.valid);
          // setTest(validateToken.data.valid);
          setValidToken(validateToken.data.valid);
        }
      }
      verifyToken();

      // const { token }: ILogin = getLoginJson;
      // console.log("Email e senha: ", email, token, password);
      if (token) {
        // setToken(getLoginJson);
        // setToken(token);
        console.log("Valid: ", validToken);
        console.log("Meu token fora: ", token);
        if (token && token !== "" && validToken === true && pressButton) {
          console.log("Meu token: ", token);

          navigate("/randomuser");
        }
      }
    }
  }, [navigate, pressButton, validToken]);

  async function login() {
    await tryLogin(
      email,
      password,
      confirmPassword,
      navigate,
      createValidate,
      setIsLoading
    );
  }

  return (
    <Container>
      <ToastContainer />
      <LoginContainer>
        <Text createValidate={createValidate}>
          {!createValidate
            ? "Faça o seu login abaixo"
            : "Faça o seu cadastro abaixo"}
        </Text>
        <ContainerInput>
          <FirstInput
            placeholder="user@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SecondInput
            placeholder="******"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {createValidate ? (
            <ThirdInput
              placeholder="******"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          ) : null}
        </ContainerInput>

        <Button
          onClick={() => {
            login();
            setPressButton(false);
          }}
          createValidate={createValidate}
        >
          <TextButton>{!createValidate ? "Entrar" : "Cadastrar"}</TextButton>
        </Button>

        <CreateUserButton onClick={() => setCreateValidate(!createValidate)}>
          <CreateUserText>
            {!createValidate
              ? "Clique aqui para se cadastrar"
              : "Voltar para tela de login"}
          </CreateUserText>
        </CreateUserButton>
      </LoginContainer>
    </Container>
  );
}
