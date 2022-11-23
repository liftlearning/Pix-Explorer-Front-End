import axios from "axios";

export const api = axios.create({
  baseURL: "https://p2pix-block-explorer-api-staging.vercel.app/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

