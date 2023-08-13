<template>
    <div class="admin-dashboard">
        <v-main>
      <v-container
        class="py-2 px-2"
        fluid
      >
      <v-subheader class="d-flex justify-space-between align-center">
        <h3>Dashboard</h3>
        <v-btn class="rounded-lg" color="success" >
            View candidate
        </v-btn>
      </v-subheader><br>
      <v-row  class="py-2 px-2" fluid>
        <v-col cols="12" lg="3" v-for="(item,index) in activities" :key="index">
            <v-card class="rounded-lg" elevation="2">
                <v-card-text class="d-flex justify-space-between align-center">
                    <div>
                        <strong>{{item.title}}</strong><br>
                        <small>Last 2 weeks</small>
                    </div>
                    <v-avatar :color="item.color" size="60">
                        <span class="white-text">{{item.amount}}</span>
                    </v-avatar>
            </v-card-text>
            </v-card>
        </v-col>
        <!-- <v-col lg="5" cols="12">
            <v-card>Activities</v-card>
          </v-col> -->
      </v-row>
      <v-row>
        <v-col lg="12">
          <UserData />
        </v-col>
      </v-row>
    </v-container>
    </v-main>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
import UserData from '@/components/UserData.vue'

const drawer = ref(null)
</script>
  
  <script>
  export default {
    data() {
      return {
        totalCandidates: 0,
        totalMembers: 0,
        activities:[
            {title:'Total Candidates',color:'light-blue-lighten-2',amount:'57'},
            {title:'Facebook Candidates',color:'purple',amount:'50'},
            {title:'Total Candidates',color:'light-blue-lighten-2',amount:'57'},
            {title:'Total Candidates',color:'red',amount:'57'}
        ]
      };
    },
    // You can fetch data from an API or calculate these values dynamically here
    mounted() {
      // For demonstration purposes, I'm just setting some sample values
      this.totalCandidates = 50;
      this.totalMembers = 25;
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 10px;
    padding: 10px;
  }
  
  .card-header {
    font-weight: bold;
  }
  
  .card-body {
    font-size: 24px;
  }
  </style>
  