<template>
  <v-data-table caption="test" v-model:sort-by="sortBy" :headers="headers" :items="properties"
    class="elevation-1"></v-data-table>

</template>
<script>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { fetchItemById } from '@/router/apiService'

export default {
  data() {
    return {
      properties: [],
      items: null,
      sortBy: [{ key: 'calories', order: 'asc' }],
      headers: [
        {
          title: '営業担当',
          align: 'start',
          sortable: false,
          key: 'sales_staff',
        },
        { title: '自力レイゼクス', key: 'self_powered_raizex' },
        { title: '会社名営業事録リンク', key: 'company_name_sales_link' },
        { title: '勤務先名', key: 'office_name' },
        { title: '会社規模', key: 'company_size' },
        { title: '住所', key: 'address' },
        { title: '担当部署', key: 'department_in_charge' },
        { title: '担当者', key: 'manager' },
        { title: '連絡先', key: 'contact_address' },
        { title: '外国人実績数', key: 'number_of_foreigners' },
        { title: '案件一覧リンク', key: 'project_list_link' },
        { title: 'オーダー数', key: 'number_of_orders' },
      ],
    }
  },
  mounted() {
    // Fetch data from the API when the component is mounted
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.items = await fetchItemById();
        this.properties = this.items['body'];
      } catch (error) {
        // Handle errors, e.g., display an error message
      }
    },
  },
}
</script>