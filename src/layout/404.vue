<template>
  404
  <ul>
    <li v-for="item in meunList">
      <router-link :key="item.name" :to="item.path" class="mr-5">{{ item.name }}</router-link>
    </li>
  </ul>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { routeDataProcessor } from './utils'
import { ref } from 'vue';
const meunList = ref(routeDataProcessor(useRouter().getRoutes()))
</script>