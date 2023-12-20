import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentBalanceService, getProvidersService } from "../services";

export const appStore = defineStore('appStore', {
  state: () => {
    return {
      // BALANCE
      balance: ref(null),
      // PROVIDERS
      providers: ref(null),
      // ERROR
      isError: ref(false),
    }
  },
  actions: {
    async getCurrentBalance() {
      try {
        const data = await getCurrentBalanceService();
        console.log(data);
        this.balance = data.balanceCommerce;
      } catch (error) {
        console.error("ERR", error);

      }
    },
    async getProviders() {
      try {
        const { companies } = await getProvidersService();
        console.log(companies);
        this.providers = companies;
      } catch (error) {
        console.error("ERR", error);

      }
    }
  }
})