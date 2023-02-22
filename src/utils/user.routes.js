import { axiosClient } from "./api"

export const userRoutes = () => ({
  getUserById: (tokenId) => axiosClient.get(`/user/find/${tokenId}`),
  auth: ({email, password}) => axiosClient.post("/user/auth/", {email, password})
})