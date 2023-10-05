<template lang="">
    <div>
      <v-navigation-drawer v-model="drawerState">
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
<script setup>
import { reactive } from 'vue';
import { ref,watch } from 'vue';


const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const drawerState = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    drawerState.value = newValue;
  }
);

</script>
<script>
export default {
  name: "Sidebar",
  data: () => ({
    drawer: true,
    links: [
      { path: '/', label: 'Dashboard', icon: 'mdi-microsoft-windows' },
      { path: '/company', label: 'Company', icon: 'mdi-domain' },
      { path: '/candidate', label: 'Job Seeker', icon: 'mdi-clipboard-list-outline' },
      { path: '/', label: 'Job Process', icon: 'mdi-delete' },
      { path: '/', label: 'System Setting', icon: 'mdi-alert-octagon' },
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