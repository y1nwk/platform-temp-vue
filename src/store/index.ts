/*
 * @Author: Leslie
 * @Date: 2021-12-16 14:47:39
 * @LastEditors: Leslie
 * @LastEditTime: 2021-12-20 16:41:16
 * @FilePath: \platform-temp\src\store\index.ts
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// [createPersistedState()];
import app from './modules/app';
import getters from './getters';
import { AppCommonState } from './modules/app';
export interface GlobalDataProps {
  app: AppCommonState;
}
Vue.use(Vuex);

export default new Vuex.Store<GlobalDataProps>({
  modules: {
    app,
  },
  getters,
  plugins: [createPersistedState()],
});
