<template>
  <v-app id="inspire">
    <Sidebar />
    <Header />
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

  const drawer = ref(null)
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