import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0%;
  padding-top: 0%;
  text-align: center;
  @media (min-width: 280px) and (max-width: 653px) {
    height: 100vh;
    width: 100%;
  }
`;

export const ContainerUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 280px) and (max-width: 653px) {
    height: 100%;
    width: 100%;
    margin-right: 12%;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  font-size: 20px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background: #0d6efd;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 5px;
  border-radius: 0.2em;
  @media (min-width: 280px) and (max-width: 653px) {
    height: 18%;
    width: 8%;
    margin-bottom: 30%;
  }
`;
