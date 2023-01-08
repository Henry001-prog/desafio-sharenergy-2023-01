import styled from "styled-components";
import { Link } from "react-router-dom";

interface Prop {
  bg: number;
}

export const Nav = styled.nav`
  flex-direction: row;
  padding: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
  background-color: #000;
  opacity: 0.9;
  list-style-type: none;
  @media (min-width: 280px) and (max-width: 653px) {
    flex: 1;
  }
`;

export const Div = styled.div`
  display: flex;
  padding-right: 1%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (min-width: 280px) and (max-width: 653px) {
    margin-right: 3%;
    width: 75%;
  }
`;

export const Home = styled.li<Prop>`
  display: flex;
  width: 7%;
  border-radius: 3px;
  margin-right: 3%;
  padding-top: 0.3%;
  padding-bottom: 0.3%;
  font-size: 1em;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => (props.bg === 1 ? "#4682B4" : null)};
  @media (min-width: 280px) and (max-width: 653px) {
    padding-left: 6%;
    padding-right: 6%;
    margin-left: 30%;
    font-size: 1em;
    width: 20%;
  }
`;

export const Li = styled.li<Prop>`
  display: flex;
  width: 4%;
  height: 4.5vh;
  border-radius: 3px;
  margin-right: 3%;
  padding-left: 0.9%;
  padding-right: 0.8%;
  padding-top: 1%;
  padding-bottom: 1%;
  margin-left: 5%;
  font-size: 1em;
  align-items: center;
  background-color: ${(props) => (props.bg === 2 ? "#4682B4" : null)};
  @media (min-width: 280px) and (max-width: 653px) {
    padding-right: 3.6%;
    height: 8.5vh;
    width: 17%;
    font-size: 1em;
    margin-left: 0.5%;
  }
`;

export const SecondLi = styled.li<Prop>`
  display: flex;
  width: 5%;
  border-radius: 3px;
  padding-left: 0.3%;
  padding-right: 0.3%;
  padding-top: 0.8%;
  padding-bottom: 0.8%;
  margin-left: 5%;
  margin-right: 3%;
  font-size: 1em;
  text-align: center;
  background-color: ${(props) => (props.bg === 3 ? "#4682B4" : null)};
  @media (min-width: 280px) and (max-width: 653px) {
    width: 30%;
    margin-left: 3%;
  }
`;

export const ThirdLi = styled.li<Prop>`
  display: flex;
  width: 4.7%;
  border-radius: 3px;
  padding-left: 0.7%;
  padding-top: 0.8%;
  padding-bottom: 0.8%;
  margin-left: 3%;
  font-size: 1em;
  text-align: center;
  background-color: ${(props) => (props.bg === 4 ? "#4682B4" : null)};
  @media (min-width: 280px) and (max-width: 653px) {
    padding-right: 1%;
    padding-left: 1%;
    width: 30%;
    margin-left: 4%;
  }
`;

export const LinkPage = styled(Link)`
  background-color: transparent;
  color: #dcdcdc;
  font-size: 1em;
  text-decoration: none;
  list-style-type: none;
  @media (min-width: 280px) and (max-width: 653px) {
    font-size: 0.8em;
  }
`;
