import styled from "styled-components";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const Container = styled.div`
  display: flex;
  height: 88vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #191921;
  @media (min-width: 280px) and (max-width: 653px) {
    height: 100vh;
  }
`;

export const LoadingContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled(CircularProgress)``;

export const Image = styled.img`
  max-width: 90%;
  max-height: 70vh;
`;

export const Text = styled.div`
  font-size: 1.1em;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  @media (min-width: 280px) and (max-width: 653px) {
    margin-top: 15%;
  }
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 0.8em;
  width: 85.5%;
  padding: 3% 0% 3% 0%;
  background-color: #007fff;
  border: 1px solid #d0d0d0;
  cursor: pointer;
  @media (min-width: 280px) and (max-width: 653px) {
    margin-top: 15%;
    font-size: 0.6em;
  }
`;

export const TextButton = styled.div`
  font-size: 1.5em;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;
