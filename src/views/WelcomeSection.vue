<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="ring-background  d-flex flex-column justify-content-center align-items-center text-center">
        <button v-if="dataStore.language != 'es'" class="btn btn-primary my-2" @click="dataStore.setLanguage('es')">ES</button>
        <button v-if="dataStore.language != 'en'" class="btn btn-primary my-2" @click="dataStore.setLanguage('en')">EN</button>
        <button v-if="dataStore.language != 'nl'" class="btn btn-primary my-2" @click="dataStore.setLanguage('nl')">NL</button>

      <div class="instrument-sans-400">

         {{ dataStore.t('welcome.day') }} 
        <br />
        {{ dataStore.t('welcome.date') }} 
      </div>

      <div class="quicksand-400 location mt-3">
        Hacienda San Jose Actipan, Cholula <br />
        Puebla, Mexico
      </div>

      <div class="quicksand-400 countdown mt-3">
        {{ timeRemaining }}
      </div>

      <button class="btn btn-outline-dark round-button mt-5 px-4 py-2"> RSVP</button>


    </div>
  </BaseSection>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import BaseSection from './BaseSection.vue';

import { useDataStore } from '@/stores/DataStore'
const dataStore = useDataStore()

const props = defineProps(['image']);
defineEmits(['is-visible']);

// Target date (local time)
const targetDate = new Date("2027-02-20T00:00:00");

const now = ref(new Date());
let timer = null;




const timeRemaining = computed(() => {
  const diff = targetDate - now.value;

  if (diff <= 0) return "0 days 0 hrs 0 mins";

  const totalMinutes = Math.floor(diff / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return `${days} DAYS ${hours} HRS ${minutes} MINS`;
});

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date();
  }, 10*1000); // update every 10 seconds
});

onUnmounted(() => {
  clearInterval(timer);
});


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap');
.location {
  font-size: 26px;
}

.round-button {
  border-radius: 50px;
  /* border-color: rgb(51, 51, 51); */
  /* color: rgb(51, 51, 51); */
  border-width: 2px;
}

.countdown {
  font-size: 14px;
  letter-spacing: 0.12em;
}


.instrument-sans-400 {
  font-family: "Instrument Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  /* font-variation-settings: "wdth" 100; */
  font-size: 32px;
  color: rgb(51, 51, 51)
}



.ring-background {
  /* The background color you requested */
  background-color: rgb(208, 206, 208);

  /* Replace 'your-image.png' with the actual filename */
  background-image: url('/img/bg-floral.png');

  /* Standard centering and scaling */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* Ensure the container has height to be visible */
  width: 100%;
  height: 100vh;
}
</style>