
import { getResults } from '../services/health';

export default {
  namespace: 'users',

  state: {
    healthInfo: ''
  },

  effects: {
    *getResult({ payload }, { call, put }) {
      const res = yield call(getResults);
      console.log('healthRes>>>>', res);
      yield put({
        type: 'updateResult',
        payload: res
      })
    }
  },

  reducers: {
    updateResult(state , { payload }) {
      return request({
        ...state,
        healthInfo: payload
      })
    }
  }
}
