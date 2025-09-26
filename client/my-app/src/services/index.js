import axios from "axios";
import { getValueFromLocalStorage } from "../utils";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const instance = axios.create({
  baseURL: BASE_URL,
});

const authInstance = axios.create({
  baseURL: BASE_URL,
});

authInstance.interceptors.request.use((config) => {
  const token = getValueFromLocalStorage("token");
  if (!token) {
    window.location.href = "/auth/login";
    return config;
  }
  try {
    config.headers.Authorization = `Bearer ${getValueFromLocalStorage(
      "token"
    )}`;
  } catch (error) {
    window.location.href = "/auth/login";
    console.log(error);
  }
  return config;
});

export const login = (name, password) => {
  return instance.post("/auth/login", { name, password });
};

export const createProduct = (data) => {
  return authInstance.post("/products/create", data);
};

export const register = (payload) => {
  return instance.post("/auth/register", payload);
};
