

import commonController from "services/urls/common";

const url = {
  common: commonController(),
};

const LOCAL = false;
const BASE_URL = __DEV__
  ? !LOCAL
    ? {
      // Development
      QUESTIONSURL: 'https://api.stackexchange.com/2.3/',
    }
    : {
      // local
      QUESTIONSURL: 'https://api.stackexchange.com/2.3/',
    }
  : {
    // Production
    QUESTIONSURL: 'https://api.stackexchange.com/2.3/',

  };

export { BASE_URL };

export default url;
