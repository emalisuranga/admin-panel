<template lang="">
    <div>
        <v-app-bar
        app
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        >
            <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Title</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    name: "Header",
    methods: {
        openDrawer() {
            this.$emit("open-drawer-clicked"); // Emit an event to notify the parent component
        }
    },
}
</script>
<style lang="">
    
</style>