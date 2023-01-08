import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 86.1vh;
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
  margin-top: 2%;
`;

export const Form = styled.form`
  margin-top: 3%;
  @media (min-width: 280px) and (max-width: 653px) {
    margin-top: 10%;
    
  }
`;

export const Select = styled.select`
  display: 'flex';
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  font-size: 0.9em;
`;

export const Option = styled.option`
  font-size: 1em;
`;