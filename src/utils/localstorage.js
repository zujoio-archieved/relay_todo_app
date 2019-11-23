import AsyncStorage from '@react-native-community/async-storage'
// import { LOCAL_STORAGE_LABLES } from "../constants";



// class LocalStorage {
const storeToken = async (token) => {
  console.log("storeToken", { token })
  await AsyncStorage.setItem("TOKEN", token);
};
const getToken = async () => {
  return await AsyncStorage.getItem("TOKEN");
};
const clearToken = async () => {
  return await AsyncStorage.removeItem("TOKEN");
};
// }

const LocalStorage = {
  storeToken,
  getToken,
  clearToken
}

export { LocalStorage };
