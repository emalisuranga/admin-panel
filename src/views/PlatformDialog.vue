<template>
    <v-dialog v-model="dialogVisible" max-width="500px">
        <v-card>
            <v-card-title>
                Add Platform
            </v-card-title>
            <v-card-text>
                <v-form ref="platformForm" @submit.prevent="submitPlatform">
                    <v-text-field v-model="platform.name" label="Platform Name"></v-text-field>
                    <v-text-field v-model="platform.url" label="Platform URL"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="dialogVisible = false">Cancel</v-btn>
                <v-btn color="success" @click="submitPlatform" :disabled="isSubmitDisabled">Submit</v-btn>
                <!-- <v-btn color="success" @click="submitPlatform">Submit</v-btn> -->
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { postPlatFormData } from "@/services/ApiService";

export default {
    data() {
        return {
            platform: {
                name: '',
                url: ''
            },
            dialogVisible: false
        };
    },
    computed: {
        isSubmitDisabled() {
            // Disable the "Submit" button if either of the fields is empty
            return !this.platform.name || !this.platform.url;
        }
    },
    methods: {
        async submitPlatform() {
            if (this.$refs.platformForm.validate()) {
                try {
                    // Call your API using the ApiService function
                    const response = await postPlatFormData({
                        platFormName: this.platform.name,
                        platFormURL: this.platform.url,
                        actions: true
                    });

                    // Emit an event to send the platform data to the parent component
                    this.$emit("platform-submitted", response.newItem);

                    // Close the dialog
                    this.dialogVisible = false;
                } catch (error) {
                    // Handle errors (e.g., show an error message)
                    console.error("API Error:", error);
                }
            }
        }
    }
};
</script>
  