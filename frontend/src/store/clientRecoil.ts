import { atom } from "recoil";
import { IClient } from "../interfaces/ClientType";
import { toast } from "react-toastify";

import { allApis } from "../services/api";

const { apiCrud } = allApis;

interface IDocs {
  docs: [];
}

export const clientsState = atom<IClient[] | undefined>({
  key: "listClients",
  default: [],
});

export const isLoading = atom<boolean>({
  key: "isloading",
  default: false,
});

export const modalVisibleState = atom<boolean>({
  key: "modalVisible",
  default: false,
});

export const searchClientName = atom({
  key: "searchNameClient",
  default: "",
});

export const searchClient = atom<IClient | undefined>({
  key: "searchClient",
  default: {
    id: "",
    cpf: "",
    name: "",
    birthDate: "",
    gender: "",
    address: "",
    state: "",
    city: "",
  },
});

export const listClients = async (token: string) => {
  const response = await apiCrud.get("/clients", {
    params: {
      token: token,
    },
  });
  try {
    const clients: IClient[] = response.data;

    return clients;
  } catch (error: any) {
    toast.error("Erro ao listar os clientes, tente novamente mais tarde!", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
};

export const searchClients = async (clientName: string) => {
  const response = await apiCrud.get(`/client/${clientName}`);
  try {
    const client: IClient | null = response.data;
    console.log('Pesquisa: ', client);

    return client;
  } catch (error: any) {
    toast.error("Erro ao buscar o cliente, tente novamente mais tarde!", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
};

export const deleteClient = (
  client: IClient,
  navigation: any,
  clientId: string,
  resetClient: () => void,
  setLoading: (value: boolean) => void
) => {
  return new Promise((resolve, reject) => {
    setLoading(true);
    toast.error(`Deseja deletar cliente ${client.name}?`, {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    alert(`Deseja deletar cliente ${client.name}?`); // vai ser um modal
  });
};
