import axios from "axios";
import { useRouter } from "vue-router";
const api = axios.create({
  baseURL: `${"https://aspexpressapi-production.up.railway.app"}`,
  headers: {
    // 'Authorization': `Bearer ${localStorage.getItem("auth_token")}`
    "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI"}`
  }
});
api.interceptors.response.use(null, (error) => {
  const router = useRouter();
  if (error.response.status === 401)
    ;
  console.log("router", router);
  return Promise.reject(error);
});
const getCurrentBalanceService = async () => {
  const { data } = await api.get("/getActualBalance");
  return data.data;
};
const getProvidersService = async () => {
  const { data } = await api.get("/getProviders");
  return data.data;
};
export {
  getProvidersService as a,
  getCurrentBalanceService as g
};
