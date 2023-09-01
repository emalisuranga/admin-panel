<template>
    <div class="admin-dashboard">
        <v-main>
            <v-container class="py-2 px-2" fluid>
                <v-data-table caption="test" v-model:sort-by="sortBy" :headers="headers" :items="items" class="elevation-1">
                    <template v-slot:item.status="{ item }">
                        <v-chip :color="getStatusColor(item.columns.status)" small>
                            {{ item.columns.status }}
                        </v-chip>
                    </template>
                    <template #item.actions="{ item }">
                        <v-btn color="primary" @click="openDialog(item)">
                            Action
                        </v-btn>
                    </template>
                </v-data-table>
                <candidate-dialog ref="candidateDialog" :inputJson="jsonData" :dialogItem="dialogItem" />
            </v-container>
        </v-main>
    </div>
</template>
  
<script>
import CandidateDialog from './CandidateDialog.vue';
import { fetchRecruitmentList, fetchRecruitmentById } from '@/services/ApiService';


export default {
    components: {
        CandidateDialog
    },
    mounted() {
        // Fetch data from the API when the component is mounted
        this.fetchRecruitmentList();
        // this.fetchRecruitmentById(dialogItem);
    },
    data() {
        return {
            items: [],
            dialogItem: [],
            headers: [
                { title: 'ID', key: 'cn_id' },
                { title: 'Status', key: 'status' },
                { title: 'Name', key: 'full_name' },
                { title: 'Email', key: 'email' },
                { title: 'Nationality', key: 'nationality' },
                { title: 'Phone Number', key: 'tel_number' },
                { title: 'Japanese Proficiency', key: 'japanese_proficiency_test' },
                { title: 'Status Of Residence', key: 'status_of_residence' },
                { title: 'interview_result', key: 'interview_result' },
                { title: 'Name', key: 'actions', sortable: false }
            ],
            jsonData: [],
            jsonData1: [
                {
                    cn_id: "CN_001",
                    japanese_proficiency_test: "N4",
                    resume_link: "https://ap-northeast-1.console.aws.amazon.com/lambda/home?region=ap-northeast-1#/functions/postRecruitmentIistSheet?newFunction=true&tab=testing",
                    sex: "male",
                    status: "ongoin",
                    kana: "日本語検定",
                    date_of_birth: "1994/11/18",
                    full_name: "Emal Isuranga",
                    email: "emalisuranga@gamail.com",
                }
                // Your JSON data goes here
            ]
        };
    },
    methods: {
        async fetchRecruitmentList() {
            try {
                const data = await fetchRecruitmentList();
                this.items = data['body'];
                // console.log('Recruitment List:', data['body']);
            } catch (error) {
                console.error('Error:', error);
            }
        },
        // async fetchRecruitmentById(item) {
        //     try {
        //         const data = await fetchRecruitmentById(dialogItem);
        //         this.dialogItem = data['body'];
        //         // console.log('Recruitment List:', data['body']);
        //     } catch (error) {
        //         console.error('Error:', error);
        //     }
        // },
        performAction(item) {
            // Perform the action based on the selected item
            console.log('Performing action for', item);
        },
        async openDialog(item) {
            console.log(item.columns);
            this.dialogItem = item.columns;

            // Check if dialogItem is defined and contains the necessary properties
            try {
                const data = await fetchRecruitmentById(item.columns);
                // this.jsonData1 = data
                this.jsonData.push(data)
                console.log('Recruitment List:', this.jsonData1);
                console.log('Recruitment List:', this.jsonData);
            } catch (error) {
                console.error('Error:', error);
            }

            this.$refs.candidateDialog.dialog = true;
            // You can also pass the item to the dialog component if needed
            this.$refs.candidateDialog.item = item;
        },
        getStatusColor(status) {
            // Define colors for different status values
            switch (status) {
                case 'Pending':
                    return 'orange';
                case 'In Progress':
                    return 'blue';
                case 'Ongoing':
                    return 'green';
                default:
                    return 'grey';
            }
        }
    }
};
</script>
  