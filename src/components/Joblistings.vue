<script setup>
import axios from 'axios'
import { ref , onMounted } from "vue";
const jobs = ref([]);

onMounted(async() => {
    try {
        const response = await axios.get('http://localhost:3000/jobs');
        jobs.value = response.data;
        
    } catch (error) {
        
    }
});
</script>


<template>
<div   v-for="job in jobs" :key="job.id">
  {{ job.title }}
</div>
</template>




