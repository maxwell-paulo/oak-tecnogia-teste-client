import axios from "axios";

const apiURLs = {
  development: "http://localhost:4001/",
  production: "https://historic-soccer-teams-api.cyclic.app/api/1.0",
};

const api = axios.create({ baseURL: apiURLs[process.env.NODE_ENV] });

export { api };
