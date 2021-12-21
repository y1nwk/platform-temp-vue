<!--
 * @Author: Leslie
 * @Date: 2021-12-16 14:47:39
 * @LastEditors: Leslie
 * @LastEditTime: 2021-12-20 15:03:47
 * @FilePath: \platform-temp\src\views\Home.vue
-->
<template>
  <Layout />
</template>

<script lang="ts">
import Layout from '@/views/layout/layout.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Layout,
  },
})
export default class Home extends Vue {}
</script>
