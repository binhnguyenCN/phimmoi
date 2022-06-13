/* eslint-disable no-unused-vars */
// libs
import React, { createContext, useContext, useMemo, useState } from "react";
// storages
import authStorage from "@/auth/storage";

type UserProps = {
  name: string;
  email: string;
};
type AuthContextProps = {
  user: UserProps | null;
  removeUser: () => Promise<void>;
  storeUser: (userInfo: UserProps) => Promise<void>;
  restoreUser: () => Promise<void>;
};
type ProvideAuthProps = {
  children: React.ReactNode;
  value?: AuthContextProps;
};
// @ts-ignore
export const AuthContext = createContext<AuthContextProps>();

// name: "Binh Nguyen",
// email: "ngvanbinh2001@gmail.com"
export const ProvideAuth = ({ children, value }: ProvideAuthProps) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const restoreUser = async () => {
    const userInfo = await authStorage.getUser();
    if (userInfo) setUser(user);
  };
  const storeUser = async (userInfo) => {
    setUser(userInfo);
    await authStorage.storeUser(userInfo);
  };
  const removeUser = async () => {
    setUser(null);
    await authStorage.removeUser();
  };
  const providerAuth = useMemo(
    () => ({
      user,
      storeUser,
      removeUser,
      restoreUser
    }),
    [user, restoreUser, storeUser, removeUser]
  );
  return (
    <AuthContext.Provider value={value || providerAuth}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
