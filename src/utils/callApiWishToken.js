import authService from "service/authService";

const callApiWithToken = async (url, options) => {
  const token = JSON.parse(localStorage.getItem("token"));

  options = {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${token?.accessToken}`,
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, options);
  if (res.status === 403) {
    //expired token
    const newToken = await authService.refreshToken();
    if (newToken.data.accessToken) {
      token.accessToken = newToken.data.accessToken;
      localStorage.setItem("token", JSON.stringify(token));
      options = {
        ...options,
        headers: {
          ...options?.headers,
          Authorization: `Bearer ${token.accessToken}`,
          "Content-Type": "application/json",
        },
      };
      return fetch(url, options).then((res) => res.json());
    }
  }
  return res.json();
};

export default callApiWithToken;
