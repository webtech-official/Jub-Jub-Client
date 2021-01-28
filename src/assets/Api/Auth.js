import { methodType, requestApiWithBodyWithoutToken } from "../lib/requestApi";
import { BASE_URL } from "../../config/config.json";
import { AUTH } from "../lib/requestUrl";
class Auth {
  async login(email, password) {
    try {
      const body = {
        email,
        password,
      };
      const response = requestApiWithBodyWithoutToken(
        BASE_URL,
        methodType.POST,
        AUTH.login(),
        body,
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async signup(classNumber, email, name, password) {
    try {
      const body = {
        classNumber,
        email,
        name,
        password,
      };
      const response = requestApiWithBodyWithoutToken(
        BASE_URL,
        methodType.POST,
        AUTH.signup(),
        body,
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Auth();
