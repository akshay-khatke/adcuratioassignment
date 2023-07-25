import { questionsApi } from 'services/apis';
import createAxios from 'services/axios';
import { BASE_URL } from 'services/urls';

const { instance: questionsInsatnce, ...questions } = createAxios(BASE_URL.QUESTIONSURL);

const api = {
  questions: questionsApi(questions),
};



export default api;
