<template lang="">
    <div>
        <v-app-bar
        app
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        >
            <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>

            <v-toolbar-title>{{currentRouteName}}</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <!-- <v-btn icon>
                <v-icon>mdi-translate</v-icon>
            </v-btn> -->

            <v-menu>
                <template v-slot:activator="{ props }" >
                    <v-btn class="custom-menu" icon="mdi-translate" v-bind="props"></v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, i) in translateItems" :key="i" @click="selectItem(item)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu>
                <template v-slot:activator="{ props }" >
                    <v-btn class="custom-menu" icon="mdi-translate" v-bind="props"></v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, i) in translateItems" :key="i" @click="selectItem(item)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>

export default {
    name: "Header",
    data: () => ({
        translateItems: [
            { title: 'English' },
            { title: 'Japanese' }
        ]
    }),
    methods: {
        openDrawer() {
            this.$emit("open-drawer-clicked"); // Emit an event to notify the parent component
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        },
    }
}
</script>

<style>
    .custom-menu {
        max-width: 200px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    }
</style>