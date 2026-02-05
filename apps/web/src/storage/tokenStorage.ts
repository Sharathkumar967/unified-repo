export const webTokenStorage = {
  getToken: async () => {
    return localStorage.getItem("ACCESS_TOKEN");
  },
  removeToken: async () => {
    localStorage.removeItem("ACCESS_TOKEN");
  },
};
