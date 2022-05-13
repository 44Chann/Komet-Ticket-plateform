import { useEffect, FC, createContext, useContext, useState } from "react";
import { ethers } from "ethers";

let intial_value: any = {}

export const AppContext = createContext(intial_value);


export function useAppContext() {
  return useContext(AppContext);
}


export default function D() {
  return <div></div>;
}
