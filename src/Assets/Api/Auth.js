import { methodType, requestApiWithBodyWithoutToken, requestApiWithoutBodyWithToken } from "../lib/requestApi";
import { AUTH } from "../lib/requestUrl";
class Auth {
  async login(email, password) {
    try {
      const body = {
        email,
        password,
      };
      const response = requestApiWithBodyWithoutToken(
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
  async logout() {
    try {
      const response = requestApiWithoutBodyWithToken(
        methodType.POST,
        AUTH.logout(),
        {}
      )
      return response;
    } catch (error) {
      throw new Error(error)
    }
  }
  async loadUserInfo() {
    try {
      const response = requestApiWithoutBodyWithToken(
        methodType.GET,
        AUTH.userinfo(),
        {}
      )
      return response;
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new Auth();
