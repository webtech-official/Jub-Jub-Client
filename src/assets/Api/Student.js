import { methodType, requestApiWithBodyWithToken } from "../lib/requestApi";
import { BASE_URL } from "../../config/config.json";
import { STUDENT } from "../lib/requestUrl";
class Student {
  async equipmentApplyStudent(name, amount, reason) {
    try {
      const body = {
        amount,
        reason,
      };
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.POST,
        body,
        STUDENT.equipmentAllow(name),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default new Student();
