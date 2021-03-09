import {
  methodType,
  requestApiWithBodyWithToken,
  requestApiWithoutBodyWithToken,
} from "../lib/requestApi";
import { BASE_URL } from "../../config/config.json";
import { ADMIN } from "../lib/requestUrl";
class Admin {
  //신청 전체 조회
  async applyView() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        ADMIN.applyView(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  //신청 승인
  async approved(eqa_Idx) {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.PUT,
        ADMIN.approved(eqa_Idx),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  //기자재 등록
  async equipmentEnroll(content, count, img_equipment, name) {
    try {
      const body = {
        content,
        count,
        img_equipment,
        name,
      };
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.POST,
        body,
        ADMIN.equipment(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  //기자재 전체 조회
  async equipmentInfoAll() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        ADMIN.equipment(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  //기자재 상세 조회
  async equipmentDetail(idx) {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        ADMIN.equipmentDetail(idx),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  //기자재 수량 변경
  async equipmentChangeAmount(count, name) {
    try {
      const body = {
        count,
        name,
      };
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.PUT,
        body,
        ADMIN.equipmentDetail(name),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  //기자재 전체 수정
  async equipmentAllUpdate(content, count, img_equipment, newName, oldName) {
    try {
      const body = {
        content,
        count,
        img_equipment,
        newName,
      };
      const response = requestApiWithBodyWithToken(BASE_URL, methodType.PUT);
    } catch (error) {}
  }
  //신청 거절
  async reject(eqa_Idx) {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.PUT,
        ADMIN.reject(eqa_Idx),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  //반납
  async return(eqa_idx) {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.PUT,
        ADMIN.return(eqa_idx),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Admin();
