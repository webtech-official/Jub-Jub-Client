import { BASE_URL } from "../../config/config.json";
import {
  methodType,
  requestApiWithBodyWithToken,
  requestApiWithoutBodyWithToken,
} from "../lib/requestApi";
import { LAPTOP } from "../lib/requestUrl";
class Laptop {
  async laptopInfoAll() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        LAPTOP.laptop(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async laptopEnroll(
    classNumber,
    laptopBrand,
    laptopName,
    laptopSerialNumber,
    specIdx,
    studentName
  ) {
    try {
      const body = {
        classNumber,
        laptopBrand,
        laptopName,
        laptopSerialNumber,
        specIdx,
        studentName,
      };
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.POST,
        body,
        LAPTOP.laptop(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async laptopDetail(laptopSerialNumber) {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        LAPTOP.laptopDetail(laptopSerialNumber),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async laptopInfoUpdate(laptopSerialNumber, laptopBrand, laptopName) {
    try {
      const body = {
        laptopBrand,
        laptopName,
      };
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.PUT,
        body,
        LAPTOP.laptopDetail(laptopSerialNumber),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Laptop();
