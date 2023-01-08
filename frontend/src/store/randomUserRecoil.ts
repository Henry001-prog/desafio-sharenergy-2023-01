import { atom, RecoilState } from "recoil";

interface IUser {};

export const userRecoil: RecoilState<any> = atom({
    key: "user",
    default: [],
});

export const searchResultRecoil: RecoilState<number> = atom({
    key: "search",
    default: 10,
});

export const isLoadingRecoil: RecoilState<boolean> = atom({
    key: "loading",
    default: false,
});