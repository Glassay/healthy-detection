import { uploadUsers } from '../services/users';

export default {
  namespace: 'users',

  state: {},

  effects: {
    *uploadUser({ payload }, { call }) {
      const res = yield call(uploadUsers, payload);
      console.log('userRes>>>', res);
    }
  },

  reducers: {}
}
