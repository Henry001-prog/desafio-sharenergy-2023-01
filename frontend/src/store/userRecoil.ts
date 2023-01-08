import { atom, RecoilState } from "recoil";
import { allApis } from "../services/api";
import { toast } from "react-toastify";

interface ILogin {
  email: string;
  token: string;
  uid: string;
}

interface ILoginWithUid {
  email: string;
  token: string;
  uid: string;
}

const { apiAuthentication } = allApis;

export const createValidateRecoil: RecoilState<boolean> = atom({
  key: "createValidate",
  default: false,
});

export const emailRecoil: RecoilState<string> = atom({
  key: "email",
  default: "",
});

export const passwordRecoil: RecoilState<string> = atom({
  key: "password",
  default: "",
});

export const confirm_Password: RecoilState<string> = atom({
  key: "confirm_password",
  default: "",
});

export const validTokenRecoil: RecoilState<boolean> = atom({
  key: "validToken",
  default: false,
});

export const isLoading: RecoilState<boolean> = atom({
  key: "loading",
  default: false,
});

export const tryLogin = async (
  email: string,
  password: string,
  confirm_password: string,
  navigate: any,
  createValidate: boolean,
  setIsLoading: (value: boolean) => void
): Promise<void> => {
  if (!createValidate) {
    try {
      console.log("User: ", email, password, confirm_password);
      setIsLoading(true);
      const user = await apiAuthentication.post("/login", { email, password });
      const verifyUser = await apiAuthentication.get(`/verify/${email}`);

      if (user) {
        const data: ILogin = user.data;
        const myUid = verifyUser.data;
        const newData: ILoginWithUid = { ...data, uid: myUid.uid };
        localStorage.setItem("login", JSON.stringify(newData));

        navigate("/randomuser");
      }
      setIsLoading(false);
    } catch (error: any) {
      toast.error("Erro ao fazer o login, tente novamente mais tarde!", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsLoading(false);
    }
  } else {
    try {
      const createUser = await apiAuthentication.post("/signup", {
        email,
        password,
        confirm_password,
      });

      if (createUser) {
        toast.error("Novo usuário criado com sucesso!", {
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
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      toast.error("Erro ao criar o usuário, tente novamente mais tarde!", {
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
  }
};
