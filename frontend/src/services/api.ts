import axios from "axios";

const apiRandomUser = axios.create({
  baseURL: "https://randomuser.me",
});

const apiHttpCats = axios.create({
  baseURL: "https://http.cat",
});

const apiRandomDog = axios.create({
  baseURL: "https://random.dog",
});

const apiAuthentication = axios.create({
  baseURL: "http://192.168.0.108:3005/oapi",
});

const apiCrud = axios.create({
  baseURL: "http://192.168.0.108:3005/api",
});

export const allApis = {
  apiRandomUser,
  apiHttpCats,
  apiRandomDog,
  apiAuthentication,
  apiCrud,
};
