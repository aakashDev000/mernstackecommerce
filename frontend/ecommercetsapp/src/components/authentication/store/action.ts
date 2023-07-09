import axios from "axios";
import { authReducer } from "./reducer";
import { ADD_DOC_DATA, ADD_TOKEN, REMOVE_TOKEN } from "./type";

export const signuprequest = ({ data }: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:9000/api/v1/auth/signup", { data })
      .then((res) => {
        if (res?.status === 201) {
          resolve(res);
        }
      })
      .catch((err) => {
        console.log("err*********", err.response);
        reject(err.response);
      });
  });
};

export const signinrequest = ({ data }: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:9000/api/v1/auth/signin", { data })
      .then((res) => {
        if (res.status === 200) {
          if (res && res.data && res.data.data) {
            const { authtoken = "" } = res.data.data;
            if (authtoken) localStorage.setItem("authtoken", authtoken);
            authReducer({ type: ADD_TOKEN, payload: { authtoken } });
          }
          resolve(res);
        }
      })
      .catch((err) => {
        console.log("err*********", err);
        reject(err.response);
      });
  });
};

export const getDocData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9000/api/v1/auth/docdata", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authtoken"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          if (res && res.data && res.data.data) {
            const { data = {} } = res.data;
            authReducer({ type: ADD_DOC_DATA, payload: { data } });
            resolve(data);
          }
        }
      })
      .catch((err) => {
        console.log("err*********", err);
        localStorage.removeItem("authtoken");
        authReducer({ type: REMOVE_TOKEN, payload: {} });
        reject(err.response);
      });
  });
};

export const signoutrequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:9000/api/v1/auth/signout", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authtoken"),
        },
      })
      .then((res) => {
        console.log("res****", res);
        localStorage.removeItem("authtoken");
        authReducer({ type: REMOVE_TOKEN, payload: {} });
        resolve(res);
      })
      .catch((err) => {
        console.log("err*********", err);
        reject(err.response);
      });
  });
};
