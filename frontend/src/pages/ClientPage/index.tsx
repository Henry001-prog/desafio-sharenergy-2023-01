import React, { Suspense, useEffect, useState } from "react";
import {
  ClientContainer,
  ViewList,
  NotClientsText,
  ButtonContainer,
  AddButton,
  TextButton,
  ContainerList,
  ViewButton,
  ButtonLeft,
  ButtonRight,
  ViewClient,
  CpfText,
  NameText,
  ViewLoading,
  Loading,
  BirthDateText,
  GenderText,
  AddressText,
  StateText,
  CityText,
  ViewBottom,
} from "./styles";
import { FiEdit2 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

import {
  listClients,
  clientsState,
  isLoading,
  searchClient,
} from "../../store/clientRecoil";
// import { clear, setFormAtom } from "../../store/clientFormRecoil";

import { useRecoilState, useResetRecoilState } from "recoil";
import { IClient } from "../../interfaces/ClientType";
import { useNavigate } from "react-router-dom";

interface IDocs {
  docs: [];
}

export default function ClientsPage() {
  const [clients, setClients] = useRecoilState<IClient[] | undefined>(
    clientsState
  );
  const [searchResult] = useRecoilState<IClient | undefined>(searchClient);
  const [loading, setLoading] = useRecoilState<boolean>(isLoading);
  const [totalDocs, setTotalDocs] = useState();
  // const [clearState, setClearState] = useRecoilState<boolean>(clear);

  //   const resetClient = useResetRecoilState(searchClient);
  //   const isFocused = useIsFocused();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const getLogin = localStorage.getItem("login");
      if (getLogin) {
        const getLoginJson = getLogin != null ? JSON.parse(getLogin) : null;
        const { token } = getLoginJson;
        // setToken(token);
        // if (token) {
        //   async function validateLogin() {
        //     const validateToken = await apiAuthentication.post("/validateToken", {
        //       token,
        //     });
        //     setValidToken(validateToken.data.valid);
        //     console.log("App: ", validateToken.data.valid, token);
        //   }
        //   validateLogin();
        // }

        const result: IClient[] | undefined = await listClients(token);
        console.log("Data: ", result);
        if (Object.is(result, {})) {
          setClients([]);
        } else {
          setClients(result?.map((item: any) => item));
        }

        setLoading(false);
      }

      // if (isFocused) getData();

      // if (totalDocs === 0) {
      //   setClients([{
      //     id: "",
      //     empty: 'is empty',
      //     cpf: "",
      //     name: "",
      //     birthDate: "",
      //     gender: "",
      //     address: "",
      //     state: "",
      //     city: "",
      //   }]);
      //   console.log("Clientesum: ", totalDocs);
      // }
      // console.log("totaldocs: ", totalDocs);
    };
    getData();
  }, [searchResult, setLoading, setClients]);

  function renderClients() {
    if (loading) {
      return (
        <ButtonContainer>
          <AddButton>
            <TextButton>Adicionar clientes</TextButton>
          </AddButton>
          <NotClientsText>Não há clientes cadastrados!</NotClientsText>
        </ButtonContainer>
      );
    } else {
      <>Nada aqui</>;
    }
  }

  return (
    <Suspense fallback="Loading...">
      <ClientContainer>
        {Object.is(clients, []) && loading ? (
          <ViewLoading>
            <Loading />
          </ViewLoading>
        ) : !searchResult!.id ? (
          <ViewList>
            <ButtonContainer>
              <AddButton>
                <TextButton>Adicionar cliente</TextButton>
              </AddButton>
            </ButtonContainer>
            {clients!.map((item, index) => {
              return (
                <ContainerList key={index}>
                  <ViewButton>
                    <ButtonLeft
                      onClick={() =>
                        navigate("/deleteclient", { state: { client: item } })
                      }
                    >
                      <FiTrash2 size={32} color="#FF0000" />
                    </ButtonLeft>
                  </ViewButton>

                  <ButtonRight
                    onClick={() =>
                      navigate("ClientFormScreen", { state: { client: item } })
                    }
                  >
                    <FiEdit2 size={30} color="#32CD32" />
                  </ButtonRight>

                  <ViewClient>
                    <CpfText>{item.cpf}</CpfText>
                    <NameText>{item.name}</NameText>
                    <BirthDateText>{item.birthDate}</BirthDateText>
                  </ViewClient>
                </ContainerList>
              );
            })}
          </ViewList>
        ) : !loading ? (
          <ContainerList
          >
            <ViewButton>
              <ButtonLeft
                onClick={() =>
                  navigate("/deleteclient", { state: { client: searchResult } })
                }
              >
                <FiTrash2 size={32} color="#FF0000" />
              </ButtonLeft>
            </ViewButton>

            <ButtonRight
              onClick={() =>
                navigate("/clientform", { state: { client: searchResult } })
              }
            >
              <FiEdit2 size={30} color="#32CD32" />
            </ButtonRight>

            <ViewClient>
              <CpfText>{searchResult!.cpf}</CpfText>
              <NameText>{searchResult!.name}</NameText>
              <BirthDateText>{searchResult!.birthDate}</BirthDateText>
            </ViewClient>
          </ContainerList>
        ) : (
          <ViewLoading>
            <Loading />
          </ViewLoading>
        )}
      </ClientContainer>
    </Suspense>
  );
}
