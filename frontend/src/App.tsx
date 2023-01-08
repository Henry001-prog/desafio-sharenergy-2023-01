import "./App.css";
import Menu from "../src/components/Menu";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RandomUser from "./pages/RandomUser";
import MenuPages from "./pages/MenuPages";
import { useEffect, useState } from "react";
import { allApis } from "./services/api";
import RandomDog from "./pages/RandomDogPage";
import HttpCatsPage from "./pages/HttpCatsPage";

import { showNavRecoil } from "./store/routesRecoil";
import { useRecoilState } from "recoil";
import ClientsPage from "./pages/ClientPage";
import ClientFormpage from "./pages/ClientFormPage";

function App(): JSX.Element {
  const [token, setToken] = useState();
  const [validToken, setValidToken] = useState();
  const [pressButton, setPressButton] = useState(true);
  const [showNav, setShowNav] = useRecoilState<boolean>(showNavRecoil);

  const { apiAuthentication } = allApis;

  useEffect(() => {
    const getLogin = localStorage.getItem("login");
    if (getLogin) {
      const getLoginJson = getLogin != null ? JSON.parse(getLogin) : null;
      const { token } = getLoginJson;
      setToken(token);
      if (token) {
        async function validateLogin() {
          const validateToken = await apiAuthentication.post("/validateToken", {
            token,
          });
          setValidToken(validateToken.data.valid);
          console.log("App: ", validateToken.data.valid, token);
        }
        validateLogin();
      }
    }
  }, []);
  // console.log("Token: ", token);

  const isPrivate =
    (token && token !== "" && validToken === true) || !pressButton;

  return (
    <BrowserRouter>
        {showNav && <Menu />}
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <LoginPage
                pressButton={pressButton}
                setPressButton={setPressButton}
                setShowNav={setShowNav}
              />
            }
          />
        </Route>
            
        <Route>
          <Route
            path="/randomuser"
            element={
              isPrivate ? <RandomUser setShowNav={setShowNav} /> : <Navigate to="/" replace={true} />
            }
          />
        </Route>

        <Route>
          <Route
            path="/randomdog"
            element={
              isPrivate ? <RandomDog /> : <Navigate to="/" replace={true} />
            }
          />
        </Route>

        <Route>
          <Route
            path="/httpcats"
            element={
              isPrivate ? <HttpCatsPage /> : <Navigate to="/" replace={true} />
            }
          />
        </Route>

        <Route>
          <Route
            path="/clientslist"
            element={
              isPrivate ? <ClientsPage /> : <Navigate to="/" replace={true} />
            }
          />
        </Route>

        <Route>
          <Route
            path="/clientform"
            element={
              isPrivate ? <ClientFormpage /> : <Navigate to="/" replace={true} />
            }
          />
        </Route>
        

        {/*<Route exact path="/clientslist">
              <ChartPage />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
