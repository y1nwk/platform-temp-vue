<!--
 * @Author: Leslie
 * @Date: 2021-12-20 14:20:57
 * @LastEditors: Leslie
 * @LastEditTime: 2021-12-20 15:34:24
 * @FilePath: \platform-temp\src\views\layout\layout.vue
-->
<template>
  <div class="container">
    <Sidebar />
    <section class="content-section">
      <Header></Header>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './header/index.vue';
import Sidebar from './menu/index.vue';
@Component({
  components: {
    Header,
    Sidebar,
  },
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;

  .content-section {
    flex: 1;
  }
}
</style>
