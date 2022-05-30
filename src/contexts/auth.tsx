import React, { createContext, ReactNode, useEffect, useState } from "react";
import { SinginRequest } from "../api/Authenticatin";
import { toast } from "react-toastify";

type SingInData = {
  email: string;
  password: string;
};

type AuthProvaiderData = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  gender: string;
};

type AuthContextData = {
  Singin: (data: SingInData) => Promise<void>;
  isAutenticated: boolean;
  user: User | null;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvaider({ children }: AuthProvaiderData) {
  const [user, SetUser] = useState<User | null>(null);
  async function Singin({ email, password }: SingInData) {
    const { data, headers, Error } = await SinginRequest({ email, password });
    if (Error === 401) {
      toast.error("Usuário ou senha inválidos!");
    } else {
      SetUser(data);
      localStorage.setItem("Token", headers["authorization"]);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.id,
          name: data.name,
          email: data.email,
          birthDate: data.birthDate,
          gender: data.gender,
        })
      );
      localStorage.setItem("refresh-token", headers["refresh-token"]);
    }
  }

  const isAutenticated = !!user;

  useEffect(() => {
    const isExistsUser = localStorage.getItem("user");
    if (isExistsUser) {
      SetUser(JSON.parse(isExistsUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ Singin, isAutenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
