import axios from "axios";

export const api = axios.create({
  baseURL: process.env.api,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});