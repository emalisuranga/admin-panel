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
          v-for="[icon, text] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer> 
    </div>
</template>
<script>
export default {
  name: "Sidebar",
  data: () => ({
      drawer: null,
      links: [
        ['mdi-microsoft-windows', 'Dashboard'],
        ['mdi-clipboard-list-outline', 'Facebook Job Seeker'],
        ['mdi-delete', 'Business Process'],
        ['mdi-alert-octagon', 'System Setting'],
      ],
    }),
};
</script>
<style lang="">
</style>