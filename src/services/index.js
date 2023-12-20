import api from "./axios"

export const getCurrentBalanceService = async () => {
  const { data } = await api.get('/getActualBalance')
  return data.data;
}

export const getProvidersService = async () => {
  const { data } = await api.get('/getProviders')
  return data.data;
}
