import styled from "styled-components";

interface Props {
  createValidate: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #191921;
`;

export const LoginContainer = styled.div`
  flex-direction: column;
  height: 70vh;
  width: 28%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #0e0e12;
  border: 1px solid #b3b3b5;
  border-radius: 5px;
  @media (min-width: 280px) and (max-width: 653px) {
    height: 50vh;
    width: 70%;
  }
`;

export const Text = styled.div<Props>`
  font-size: 1.1em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  color: #fff;
  margin-top: 8%;
  margin-bottom: ${(props) => (props.createValidate ? "16.5%" : "25%")};
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FirstInput = styled.input`
  height: 5vh;
  width: 82%;
  border-radius: 7px;
  border-width: 1px;
  align-items: center;
  color: #fff;
  background-color: #191921;
  font-size: 18px;
  margin-bottom: 7%;
  padding-left: 2%;
  outline: none;
`;

export const SecondInput = styled.input`
  height: 5vh;
  width: 82%;
  border-radius: 7px;
  border-width: 1px;
  align-items: center;
  color: #fff;
  background-color: #191921;
  font-size: 18px;
  padding-left: 2%;
  margin-bottom: 7%;
  outline: none;
`;

export const ThirdInput = styled.input`
  height: 5vh;
  width: 82%;
  border-radius: 7px;
  border-width: 1px;
  align-items: center;
  color: #fff;
  background-color: #191921;
  font-size: 18px;
  padding-left: 2%;
  outline: none;
`;

export const CreateUserButton = styled.button`
  justify-content: center;
  margin-top: 7%;
  align-items: center;
  border: none;
  width: 85.5%;
  background-color: transparent;
  height: 10%;
  cursor: pointer;
  @media (min-width: 280px) and (max-width: 653px) {
    margin-top: 10%;
  }
`;

export const CreateUserText = styled.div`
  font-size: 1.2em;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #007fff;
`;

export const Button = styled.button<Props>`
  justify-content: center;
  margin-top: ${(props) => (props.createValidate ? "12%" : "7%")};
  align-items: center;
  border-radius: 10px;
  width: 85.5%;
  background-color: #007fff;
  height: 55px;
  border: 1px solid #d0d0d0;
  cursor: pointer;
`;

export const TextButton = styled.div`
  font-size: 1.5em;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;
