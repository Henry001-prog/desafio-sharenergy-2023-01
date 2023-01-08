import { atom, RecoilState } from "recoil";

export const dogsRecoil: RecoilState<string> = atom({
    key: "dogs",
    default: "",
});

export const isLoading: RecoilState<boolean> = atom({
    key: "loading",
    default: false,
});