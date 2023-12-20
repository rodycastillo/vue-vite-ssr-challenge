import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const api = axios.create({
  baseURL: `${"https://aspexpressapi-production.up.railway.app"}`,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
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
  return data;
};
const getProvidersService = async () => {
  const { data } = await api.get("/getProviders");
  return data;
};
const appStore = defineStore("appStore", {
  state: () => {
    return {
      // BALANCE
      test: "asd",
      balance: ref("0000.00"),
      errorBalance: ref(false),
      loadingBalance: ref(false),
      // PROVIDERS
      providers: ref(null),
      errorProviders: ref(false),
      loadingBalance: ref(false)
    };
  },
  actions: {
    async getCurrentBalance() {
      try {
        const { data } = await getCurrentBalanceService();
        console.log(data);
        this.balance = data.balanceCommerce;
        this.errorBalance = false;
      } catch (error) {
        this.errorBalance = true;
        console.error("ERR", error);
      }
    },
    async getProviders() {
      try {
        const { data } = await getProvidersService();
        console.log(data);
        this.providers = data.companies;
        this.errorProviders = false;
      } catch (error) {
        this.errorProviders = true;
        console.error("ERR", error);
      }
    }
  }
});
export {
  appStore as a
};
