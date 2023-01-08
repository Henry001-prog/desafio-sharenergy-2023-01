import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";

export const ClientContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 87vh;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const ViewLoadingOld = styled.div`
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const ViewLoading = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex: 1;
`;

export const Loading = styled(CircularProgress)``;


export const ViewList = styled.div`
  height: 100%;
  width: 92%;
  padding-top: 4%;
`;

export const ButtonContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  align-items: flex-end;
  margin-top: 2%;
  margin-right: 2%;
  margin-bottom: 10%;
  @media (min-width: 280px) and (max-width: 653px) {
    margin-top: 15%;
  }
`;

export const AddButton = styled.button`
  border-radius: 10px;
  font-size: 0.8em;
  width: 35.5%;
  padding: 3% 0% 3% 0%;
  border: 1px solid #007fff;
  background-color: transparent;
  cursor: pointer;
  @media (min-width: 280px) and (max-width: 653px) {
    margin-top: 15%;
    font-size: 0.6em;
  }
`;

export const NotClientsText = styled.div`
  display: flex;
  font-size: 1.5em;
  align-items: center;
  justify-content: center;
  margin-right: 32%;
  margin-top: 20%;
  text-align: center;
  /* color: #fff; */
  color: #000;
`;

export const TextButton = styled.div`
  font-size: 1.5em;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* color: #fff; */
  color: #000;
`;

export const ViewBottom = styled.div`
  margin-bottom: 20px;
`;

export const ContainerList = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 20px;
  margin-bottom: 12px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #d0d0d0;
  height: 35%;
  width: 90%;
  margin-bottom: 50px;
`;

export const ViewButton = styled.div`
  margin-right:  285px;
  width: 0px;
  height: 0px;
`;

export const ButtonLeft = styled.button`
  border-radius: 33px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  background-color: transparent;
`;

export const ButtonRight = styled.button`
  border-radius: 33px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 40px;
  height: 40px;
  margin-left: 240px;
  margin-bottom: 5px;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const ViewClient = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CpfText = styled.div`
  text-align: center;
  font-size: 16px;
  padding-bottom: 1%;
`;

export const NameText = styled.div`
  text-align: center;
  font-size: 16px;
  padding-bottom: 1%;
`;

export const BirthDateText = styled.div`
  text-align: center;
  font-size: 16px;
  padding-bottom: 4%;
`;

export const GenderText = styled.div`
  text-align: center;
  font-size: 16px;
  padding-bottom: 1%;
`;

export const AddressText = styled.div`
  text-align: center;
  font-size: 16px;
  padding-bottom: 1%;
`;

export const StateText = styled.div`
  text-align: center;
  font-size: 16px;
  padding-bottom: 1%;
`;

export const CityText = styled.div`
  text-align: center;
  font-size: 16px;
  padding-bottom: 4%;
`;
