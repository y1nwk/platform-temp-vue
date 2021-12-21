/*
 * @Author: Leslie
 * @Date: 2021-12-16 15:54:43
 * @LastEditors: Leslie
 * @LastEditTime: 2021-12-20 16:49:21
 * @FilePath: \platform-temp\src\store\getters.ts
 */
import Vue from 'vue';
import { GetterTree } from 'vuex';
import { GlobalDataProps } from '.';
// import { AppCommonState } from './modules/app';

export type Getters = {
  size(state: GlobalDataProps): string | number;
  collapse(state: GlobalDataProps): boolean;
};

export const getters: GetterTree<GlobalDataProps, GlobalDataProps> & Getters = {
  size: (state) => state.app.size,
  collapse: (state) => state.app.collapse,
};
// const getters = {
//   size: (state: AppCommonState): string => state.size,
// };
export default getters;
