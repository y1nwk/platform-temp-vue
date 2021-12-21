<!--
 * @Author: Leslie
 * @Date: 2021-12-20 14:22:43
 * @LastEditors: Leslie
 * @LastEditTime: 2021-12-21 08:46:32
 * @FilePath: \platform-temp\src\views\layout\header\index.vue
-->
<template>
  <header>
    <el-button type="primary" @click="changeSidebar">测试</el-button>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private changeSidebar(): void {
    this.$store.commit('app/SET_SIDEBAR_COLLAPSE');
  }
}
</script>

<style lang="scss" scoped>
header {
  height: $headerHeight;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
