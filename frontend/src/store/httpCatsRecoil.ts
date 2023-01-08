import { atom, RecoilState } from "recoil";

export const httpCatsRecoil: RecoilState<string> = atom({
    key: "httpCats",
    default: "",
  });

  export const httpCatsImgRecoil: RecoilState<string> = atom({
    key: "httpCatsImg",
    default: "100",
  });

  export const isLoading: RecoilState<boolean> = atom({
    key: "loading",
    default: false,
  });