import { atom, RecoilState } from "recoil";

export const showNavRecoil: RecoilState<boolean> = atom({
    key: "showNav",
    default: true,
});