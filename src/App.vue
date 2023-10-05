<template>
  <v-app id="inspire">
    <Sidebar :modelValue="drawerState" @update:modelValue="drawerState = $event"/>
    <Header @open-drawer-clicked="toggleDrawer"/>
    <RouterView />
    <!-- <Dashboard /> -->
    
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import Header from '@/components/Header.vue'
  import Sidebar from '@/components/Sidebar.vue'

  const drawerState = ref(true)
  const toggleDrawer = () => {
    drawerState.value = !drawerState.value;
};
</script>
