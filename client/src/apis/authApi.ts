import { apiClient } from "./config/axiosConfig";

const LOGIN = "/auth/jwt/create/"
const REGISTER = "/auth/users/"

 
const login = (id:string | undefined) => {
  return apiClient.get(LOGIN);
};


export default {
  login
};
