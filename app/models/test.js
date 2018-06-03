import { uploadResults } from '../services/test';

export default {
  namespace: 'test',

  state: {},

  effects: {
    *uploadResult({ payload }, { call, put }) {
      const res = yield call(uploadResults, payload);
      console.log('testres>>>>', res);
    }
  },

  reducers: {}
}
