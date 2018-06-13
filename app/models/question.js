import { uploadQuestion } from '../services/question';

export default {
  namespace: 'question',

  state: {},

  effects: {
    *uploadResult({ payload }, { call, put }) {
      const res = yield call(uploadQuestion, payload);
      // console.log('testres>>>>', res);
    }
  },

  reducers: {}
}
