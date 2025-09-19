// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://display-menu-1.onrender.com/", // ✅ change this to your backend URL
});

export default API;
