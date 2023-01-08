import React from "react";
import { Home, Nav, Div, Li, SecondLi, LinkPage, ThirdLi } from "./styles";

export default function Menu(): JSX.Element {
  const [background, changeBGColor] = React.useState(0);

  return (
    <Nav>
      <Div>
        <Home bg={background}>
          <LinkPage onClick={() => changeBGColor(1)} to="/randomuser">
            Random User Generator
          </LinkPage>
        </Home>

        <Li bg={background}>
          <LinkPage onClick={() => changeBGColor(2)} to="/httpcats">
            HTTP Cat
          </LinkPage>
        </Li>

        <SecondLi bg={background}>
          <LinkPage onClick={() => changeBGColor(3)} to="/randomdog">
            Random Dog
          </LinkPage>
        </SecondLi>

        <ThirdLi bg={background}>
          <LinkPage onClick={() => changeBGColor(4)} to="/clientslist">
            CRUD
          </LinkPage>
        </ThirdLi>
      </Div>
    </Nav>
  );
}
