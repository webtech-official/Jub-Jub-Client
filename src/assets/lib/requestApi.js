import axios from "axios";
import { BASE_URL, BASE_HEADER } from "../../config/config.json";
export const methodType = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};
export const ACCESS_TOKEN_NAME = "Authorization";

// 토큰 없는 파라미터가 필요한 api 요청
export const requestApiWithBodyWithoutToken = async (
  method,
  url,
  body,
  header
) => {
  try {
    const res = await axios[method](BASE_URL + url, body, {
      headers: {
        BASE_HEADER,
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
//토큰과 파라미터 없는 api 요청
export const requestApiWithoutBodyWithoutToken = async (
  method,
  url,
  header
) => {
  try {
    const res = await axios[method](BASE_URL + url, {
      headers: {
        BASE_HEADER,
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
//토큰이 필요한 파라미터 없는 api 요청
export const requestApiWithoutBodyWithToken = async (
  method,
  url,
  header
) => {
  try {
    const accessToken = window.localStorage.getItem("jupjup_token");
    const res = await axios[method](BASE_URL + url, {
      headers: {
        [ACCESS_TOKEN_NAME]: `${accessToken}`,
        BASE_HEADER,
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

//토큰과 파라미터가 모두 필요한 API 요청
export const requestApiWithBodyWithToken = async (
  method,
  body,
  url,
  header
) => {
  try {
    const accessToken = window.localStorage.getItem("jupjup_token");
    const res = await axios[method](BASE_URL + url, body, {
      headers: {
        "Authorization" : `${accessToken}`,
        BASE_HEADER,
        ...header,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};