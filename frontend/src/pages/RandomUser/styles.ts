import styled from "styled-components";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

interface IProps {
  inputText: string;
}

export const Container = styled.div<IProps>`
  display: flex;
  height: 82vh;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  padding-bottom: ${(props) =>(props.inputText ? '5%' : '0%')};
  text-align: center;
  background-color: #191921;
  @media (min-width: 280px) and (max-width: 653px) {
    height: 100vh;
    width: 90%;
  }
`;

export const LoadingContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

export const PaginationContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Loading = styled(CircularProgress)``;

export const ContainerInput = styled.div`
  display: flex;
  height: 20vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 4%;
  @media (min-width: 280px) and (max-width: 653px) {
    margin-top: 3%;
    margin-bottom: 8%;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  height: 5vh;
  width: 30%;
  padding-left: 2%;
  font-size: 1em;
  background-color: #fff;
  border-radius: 2em;
  justify-content: center;
  align-items: center;
  outline: none;
  @media (min-width: 280px) and (max-width: 653px) {
    width: 60%;
    padding-left: 3%;
  }
`;

// pode remover no futuro
export const Text = styled.div`
  font-size: 1em;
  text-align: center;
  padding-top: 5vh;
  color: #fff;
`;

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid #d0d0d0; */
  border-radius: 0.5em;
  width: 80%;
  background-color: #0e0e12;
  margin-top: 0.8%;
  height: 8%;
  @media (min-width: 280px) and (max-width: 653px) {
    width: 108%;
  }
`;

export const SmallCard = styled.div<IProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid #d0d0d0; */
  border-radius: 0.5em;
  background-color: #0e0e12;
  margin-top: 0.8%;
`;

export const Image = styled.img`
  justify-content: flex-start;
  align-items: center;
  margin-top: 2%;
  margin-right: 2%;
  margin-bottom: 2%;
  margin-left: 2%;
  height: 65.7%;
  width: 2.7%;
  border-radius: 1.5em;
  @media (min-width: 280px) and (max-width: 653px) {
    width: 7.8%;
    border-radius: 1.6em;
  }
`;

export const SmallImage = styled.img`
  justify-content: flex-start;
  align-items: center;
  margin-top: 2%;
  margin-right: 2%;
  margin-bottom: 2%;
  margin-left: 2%;
  @media (min-width: 280px) and (max-width: 653px) {
    width: 7.8%;
    border-radius: 1.6em;
  }
  
`;

export const NameText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  text-align: left;
  text-align: center;
  width: 13%;
  @media (min-width: 280px) and (max-width: 653px) {
    font-size: 0.7em;
  }
`;

export const EmailText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3%;
  color: #fff;
  text-align: center;
  width: 23%;
  @media (min-width: 280px) and (max-width: 653px) {
    font-size: 0.7em;
    margin-right: 19%;
  }
`;

export const UsernameText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1%;
  color: #fff;
  text-align: center;
  width: 15%;
  @media (min-width: 280px) and (max-width: 653px) {
    font-size: 0.7em;
    margin-right: 1%;
  }
`;

export const AgeText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3%;
  color: #fff;
  text-align: center;
  width: 10%;
  @media (min-width: 280px) and (max-width: 653px) {
    font-size: 0.7em;
    justify-content: flex-end;
    margin-right: 3%;
  }
`;

export const PageText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  margin-left: 3%;
  width: 100%;
  height: 50%;
  @media (min-width: 280px) and (max-width: 653px) {
    font-size: 0.8em;
  }
`;
