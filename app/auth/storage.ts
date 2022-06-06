// libs
import * as SecureStore from "expo-secure-store";
// constants
const KEY = "authUser";

type UserProps = {
  name: string;
  email: string;
};
const storeUser = async (user: UserProps) => {
  try {
    await SecureStore.setItemAsync(KEY, JSON.stringify(user));
  } catch (error) {
    throw new Error("Error storing the user");
  }
};

const getUser = async () => {
  try {
    const user = await SecureStore.getItemAsync(KEY);
    return user && JSON.parse(user);
  } catch (error) {
    throw new Error("Error getting the user");
  }
};

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(KEY);
  } catch (error) {
    throw new Error("Error removing the user");
  }
};

export default { storeUser, getUser, removeUser };
