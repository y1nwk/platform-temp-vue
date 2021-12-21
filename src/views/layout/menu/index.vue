<!--
 * @Author: Leslie
 * @Date: 2021-12-20 14:22:50
 * @LastEditors: Leslie
 * @LastEditTime: 2021-12-20 17:04:51
 * @FilePath: \platform-temp\src\views\layout\menu\index.vue
-->
<template>
  <el-collapse-transition>
    <aside class="menu-section" :class="isShowSidebar && 'hideSidebar'">
      <div class="sidebar"></div>
    </aside>
  </el-collapse-transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sibebar extends Vue {
  // @Getter('collapse') collapse: boolean;
  get isShowSidebar(): boolean {
    return this.$store.getters['collapse'];
  }
}
</script>

<style lang="scss" scoped>
.menu-section {
  width: $sideDefaultWidth;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.hideSidebar {
  width: $sideMiniWidth;
}
</style>
