<template lang="">
    <div>
      <v-navigation-drawer v-model="drawer">
      <v-sheet
        color="grey-lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar>

        <div>john@google.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.icon"
          :prepend-icon="link.icon"
          :title="link.label"
          @click="navigateTo(link.path)"
          link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> 
    </div>
</template>
<script>
export default {
  name: "Sidebar",
  data: () => ({
      drawer: null,
      links1: [
        ['mdi-microsoft-windows', 'Dashboard'],
        ['mdi-clipboard-list-outline', 'Facebook Job Seeker'],
        ['mdi-delete', 'Business Process'],
        ['mdi-alert-octagon', 'System Setting'],
      ],
      links: [
        { path: '/', label: 'Dashboard',icon: 'mdi-microsoft-windows'},
        { path: '/dashboard', label: 'Facebook Job Seeker',icon: 'mdi-clipboard-list-outline'},
        { path: '/', label: 'Business Process',icon: 'mdi-delete'},
        { path: '/', label: 'System Setting',icon: 'mdi-alert-octagon'},
        // Add more links as needed
      ]
    }),
  methods: {
    navigateTo(path) {
      // Use Vue Router's programmatically navigation here
      this.$router.push(path);
    }
  }
};
</script>
<style lang="">
</style>