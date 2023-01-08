import Axios from "axios";

const api = Axios.create({
  headers: {
    "Content-Type": " application/json",
    Accept: "application/json",
  },
});

export const get = (url: string) => {
  const apiCallPromis = api.get(url);
  return apiCallPromis;
};

export const post = (url: string, params: any) => {
  const apiCallPromis = api.post(url, params);
  return apiCallPromis;
};

export const patch = (url: string, params: any) => {
  const apiCallPromis = api.patch(url, params);
  return apiCallPromis;
};
