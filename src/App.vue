<template>
  <v-app id="inspire">
 
    <Sidebar />
    <Header />
    <Dashboard />
    
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import Sidebar from '@/components/Sidebar.vue'
  import Header from '@/components/Header.vue'
  import Dashboard from '@/components/Dashboard.vue'

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