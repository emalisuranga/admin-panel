<template>
    <div class="container">
        <v-dialog v-model="dialog" persistent max-width="1000px">
            <!-- Loop through each item in the input JSON -->
            <v-card v-for="(item, index) in inputJson" :key="index" class="dialog-box">
                <v-card-title>{{ item.full_name }}</v-card-title>
                <v-card-text class="item-details">
                    <div class="attribute">
                        <span class="label">Ad ID:</span>
                        <span class="value">{{ item.cn_id }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Status:</span>
                        <span class="value">{{ item.status }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Email:</span>
                        <span class="value">{{ item.email }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Date of Birth:</span>
                        <span class="value">{{ item.date_of_birth }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Resume Link:</span>
                        <a :href="item.resume_link" target="_blank" class="value">{{ item.resume_link }}</a>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Japanese Proficiency Test:</span>
                        <span class="value">{{ item.japanese_proficiency_test }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Hire Date:</span>
                        <span class="value">{{ item.hire_date }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Sex:</span>
                        <span class="value">{{ item.sex }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Kana:</span>
                        <span class="value">{{ item.kana }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Full Name:</span>
                        <span class="value">{{ item.full_name }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Visa Expiration Date:</span>
                        <span class="value">{{ item.visa_expiration_date }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Ad ID:</span>
                        <span class="value">{{ item.cn_id }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Interview Result:</span>
                        <span class="value">{{ item.interview_result }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Document Screening:</span>
                        <span class="value">{{ item.document_screening }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Application Channel:</span>
                        <span class="value">{{ item.application_channel }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Tel Number:</span>
                        <span class="value">{{ item.tel_number }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Nationality:</span>
                        <span class="value">{{ item.nationality }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Introductory Project:</span>
                        <span class="value">{{ item.introductory_project }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Candidate Date for Interview:</span>
                        <span class="value">{{ item.candidate_date_for_interview }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Introducer:</span>
                        <span class="value">{{ item.introducer }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Judgement:</span>
                        <span class="value">{{ item.judgement }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Interview Date:</span>
                        <span class="value">{{ item.interview_date }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Address:</span>
                        <span class="value">{{ item.address }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Confirmed Interview Date:</span>
                        <span class="value">{{ item.confirmed_interview_date }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Status of Residence:</span>
                        <span class="value">{{ item.status_of_residence }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">JP Person in Charge:</span>
                        <span class="value">{{ item.JP_person_in_charge }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Reason for Withdrawal:</span>
                        <span class="value">{{ item.reason_for_withdrawal }}</span>
                    </div>
                    <hr>
                    <div class="attribute">
                        <span class="label">Desired Job Type:</span>
                        <span class="value">{{ item.desired_job_type }}</span>
                    </div>
                    <!-- Add more attributes as needed -->
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn class="text-none" color="medium-emphasis" min-width="92" rounded variant="outlined"
                        @click="dialog = false">
                        Close
                    </v-btn>
                    <!-- <v-btn color="primary" @click="dialog = false">Close</v-btn> -->
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
import { fetchRecruitmentById } from '@/services/ApiService';

export default {
    data() {
        return {
            dialog: false
        };
    },
    mounted() {
        // Fetch data from the API when the component is mounted
    },
    props: ['inputJson', 'dialogItem'],
    // props: {
    //     inputJson: {
    //         type: Array,
    //         required: true
    //     },
    //     dialogItem: {
    //         type: Array,
    //         required: true
    //     },

    // },
    watch: {
        item(newItem) {
            console.log('dialogItem')
            console.log('dialogItem:', newItem);
        }
    },
    methods: {
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px;
}

.dialog-box {
    max-width: 1000px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.item-details {
    padding: 20px;
}

.attribute {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.label {
    font-weight: bold;
    margin-right: 10px;
    flex-shrink: 0;
    width: 120px;
    /* Adjust as needed */
}

.value {
    flex-grow: 1;
    overflow-wrap: break-word;
}
</style>