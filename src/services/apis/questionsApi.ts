
import { Request } from 'models';
import url from 'services/urls';


const questionsApi = ({ get, post, put }: Request) => {
    //common controller
    const getQuestions = (params?: any) =>
        get({ url: url.common.commonUrl.questions, params });
  return { 
    getQuestions
  };
};

export default questionsApi;
