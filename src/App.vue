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
  import Dashboard from '@/components/Dashboard.vue'
  import { RouterLink, RouterView } from 'vue-router'

  const cards = ['Today', 'Yesterday']

  const drawerState = ref(true)
  const toggleDrawer = () => {
    drawerState.value = !drawerState.value;
};
</script>

<script>
  export default {
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
    }),
  }
</script>