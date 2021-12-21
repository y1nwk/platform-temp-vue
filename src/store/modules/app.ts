/*
 * @Author: Leslie
 * @Date: 2021-12-16 15:55:09
 * @LastEditors: Leslie
 * @LastEditTime: 2021-12-21 08:39:35
 * @FilePath: \platform-temp\src\store\modules\app.ts
 */
import Cookies from 'js-cookie';
// import { Module, ActionTree, ActionContext, MutationTree, GetterTree, CommitOptions, DispatchOptions, Commit } from 'vuex/';
import { ActionTree, ActionContext, MutationTree } from 'vuex';

import { GlobalDataProps } from '..';

/**
 * @State
 */
export interface AppCommonState {
  size: string;
  collapse: boolean;
}
const state: AppCommonState = {
  size: Cookies.get('size') || 'medium',
  collapse: false,
};

/**
 * @Mutations
 */
interface Mutations<S = AppCommonState> {
  SET_SIZE(state: S, size: string): void;
  SET_SIDEBAR_COLLAPSE(state: S): void;
}
const mutations: MutationTree<AppCommonState> & Mutations = {
  SET_SIZE(state: AppCommonState, size: string) {
    state.size = size;
    Cookies.set('size', size);
  },
  SET_SIDEBAR_COLLAPSE(state: AppCommonState) {
    state.collapse = !state.collapse;
  },
};

/**
 * @Actions
 */
interface AppCommonActions {
  // eslint-disable-next-line no-unused-vars
  setSize(context: ActionContext<AppCommonState, GlobalDataProps>, size: string): void;
}
const actions: ActionTree<AppCommonState, GlobalDataProps> & AppCommonActions = {
  setSize({ commit }, size: string) {
    commit('SET_SIZE', size);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
