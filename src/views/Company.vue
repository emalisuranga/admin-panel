<template>
    
    <div class="admin-dashboard">
        <v-main>
            <div class="center-container">
            <v-select v-model="selectedYear" :items="yearOptions" label="Select Year"></v-select>
        </div>
        </v-main>
        
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            selectedYear: new Date().getFullYear().toString(),
            yearOptions: [],
        };
    },
    mounted() {
        this.generateYearOptions();
    },
    methods: {
        generateYearOptions() {
            const currentYear = new Date().getFullYear();
            // const startYear = currentYear - 10; // Adjust the range as needed
            const endYear = currentYear - 10; // Adjust the range as needed

            for (let year = currentYear; year >= endYear; year--) {
                this.yearOptions.push(year.toString());
            }
        },
    },
};
</script>

<style scoped>
::v-deep .v-select__selection {
  color: #333; /* Change to your desired text color */
  font-size: 30px;
}

.center-container {
  display: flex;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  height: 20vh; /* This ensures the container takes up the full height of the viewport */
  margin: 0 auto;
}
</style>




  