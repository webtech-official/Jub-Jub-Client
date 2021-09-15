export const AUTH = {
  login: () => {
    return `/signin`;
  },
  signup: () => {
    return `/signup`;
  },
  logout : () => {
    return `/logout`
  },
  userinfo: () => {
    return `/userinfo`
  }
};

export const ADMIN = {
  applyView: () => {
    return `/admin/applyview`;
  },
  approved: (eqa_Idx) => {
    return `/admin/approved/${eqa_Idx}`;
  },
  equipment: () => {
    return `/equipment/`;
  }, //POST - 기자재 등록, GET - 기자재 전체 조회
  equipmentDetail: (idx) => {
    return `/equipment/findidx/${idx}`;
  }, ///GET - 상세 조회, PUT - 기자재 수량 변경
  equipmentAllUpdate: (oldName) => {
    return `/admin/equipmentAll/${oldName}`;
  },
  reject: (eqa_Idx) => {
    return `/admin/reject/${eqa_Idx}`;
  },
  return: (eqa_Idx) => {
    return `/admin/return/${eqa_Idx}`;
  },
  rental : (eqa_Idx) => {
    return `/admin/rental/${eqa_Idx}`
  }
};

export const STUDENT = {
  equipmentAllow: (name) => {
    return `/equipmentallow/${name}`;
  },
};

export const LAPTOP = {
  laptop: () => {
    return `/admin/laptop`;
  }, //GET - 노트북 전체 조회, POST - 노트북 등록
  laptopDetail: (laptopSerialNumber) => {
    return `/admin/laptop/${laptopSerialNumber}`;
  }, // GET - 노트북 조회, PUT - 노트북 수정
};

export const MYPAGE = {
  myEquipment: () => {
    return `/myequipment`;
  },
  myLaptop: () => {
    return `/mylaptop`;
  },
};
