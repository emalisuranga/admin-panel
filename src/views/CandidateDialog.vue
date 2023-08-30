<!-- <template>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <v-card>
        <v-card-title>
          Dialog Box
        </v-card-title>
        <v-card-text>
          Content of the dialog.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template> -->
<template>
    <div class="container">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <!-- Loop through each item in the input JSON -->
            <v-card v-for="(item, index) in inputJson" :key="index" class="dialog-box">
                <v-card-title>{{ item.full_name }}</v-card-title>
                <v-card-text class="item-details">
                    <div class="attribute">
                        <span class="label">Ad ID:</span>
                        <span class="value">{{ item.cn_id }}</span>
                    </div>
                    <div class="attribute">
                        <span class="label">Status:</span>
                        <span class="value">{{ item.status }}</span>
                    </div>
                    <div class="attribute">
                        <span class="label">Email:</span>
                        <span class="value">{{ item.email }}</span>
                    </div>
                    <div class="attribute">
                        <span class="label">Date of Birth:</span>
                        <span class="value">{{ item.date_of_birth }}</span>
                    </div>
                    <div class="attribute">
                        <span class="label">Resume Link:</span>
                        <a :href="item.resume_link" target="_blank" class="value">{{ item.resume_link }}</a>
                    </div>
                    <!-- Add more attributes as needed -->
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            dialog: false
        };
    },
    props: {
        inputJson: {
            type: Array,
            required: true
        }
    }
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
    max-width: 600px;
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