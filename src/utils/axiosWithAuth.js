import axios from "axios";

export const axiosWithAuth = () => {
  const authUser = JSON.parse(localStorage.getItem("s11g2"));

  return axios.create({
    baseURL: "http://localhost:9000/api/",
    headers:
      authUser && authUser.token
        ? {
            Authorization: authUser.token,
          }
        : {},
  });
};
