import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";


type IError  = {
    error: any
}


export const Scroll = styled.div`
  padding-top: 20%;
`;

export const FormRow = styled.div`
  width: 100%;
  background-color: transparent;
  margin: 5px 0px 5px 0px;
`;

export const TextInput = styled.input<IError>`
  padding-left: 15px;
  padding-bottom: 5px;
  border-color: transparent;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) =>(props.error ? 'rgba(255,0,0, 0.3)' : '#dce4f5')};
  border: solid 1px;
  border-color: ${(props) =>(props.error ? 'rgba(255,0,0, 0.8)' : '#808080')};
  align-items: center;
  color: ${(props) =>(props.error ? '#fff' : '#2b2c2e')};
  font-size: 17px;
  height: 55px;
`;

export const ViewLoading = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled(CircularProgress)``;

export const ViewButton = styled.div`
  align-items: center;
  justify-content: center;
  padding-top: 9%;
  padding-bottom: 35%;
`;

export const Button = styled.button`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #007fff;
  border-radius: 10px;
  height: 50px;
  width: 100%;
`;

export const Text = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
`;

export const YupText = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #f00;
    font-weight: bold;
    font-size: 15px;
    margin-top: 4px;
    margin-bottom: 2%;
`;