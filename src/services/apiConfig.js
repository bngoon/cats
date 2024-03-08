import axios from "axios";

let apiUrl;
// window.location.hostname anything other will be production string
const apiUrls = {
  production: "www.cat-crud-api.heroku.com/api",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrl.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
