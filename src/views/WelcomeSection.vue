<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
<div class="lang-container">
      <button 
        v-for="lang in ['es', 'en', 'nl']" 
        :key="lang"
        v-show="dataStore.language !== lang"
        class="lang-link"
        @click="goToPage(lang)"
      >
        {{ lang.toUpperCase() }}
      </button>
    </div>

    <div class="ring-background  d-flex flex-column justify-content-center align-items-center text-center">
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
        {{ timeRemaining.toUpperCase() }}
      </div>

      <button class="btn btn-outline-dark round-button mt-5 px-4 py-2 rsvp-button" @click="submitForm()"> RSVP</button>


    </div>
  </BaseSection>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import BaseSection from './BaseSection.vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

import { useDataStore } from '@/stores/DataStore'
const dataStore = useDataStore()

const props = defineProps(['image']);
defineEmits(['is-visible']);

// Target date (local time)
const targetDate = new Date("2027-02-20T00:00:00");

const now = ref(new Date());
let timer = null;

const goToPage = (lang) => {
  router.push({
    name: route.name,
    params: { ...route.params, lang }
  })
}

const submitForm = async() => {
  const googleWebAppUrl = "https://script.google.com/macros/s/AKfycbzOyrjBfbrxMNbF_k7rmDsYfIxKQl6i7y-goeJmFR1gF_JrEU_taIwF6rTSUGiRp08m/exec"

  const name = "bram"
  const email = "ble@bla.com"
  const coming = "Y"
  const nAdults = 1
  const nKids = 10
  const allergies = "allergic to annoying children"


  const response = await fetch(googleWebAppUrl, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      coming: coming,
      n_adults: nAdults,
      n_kids: nKids,
      allergies: allergies
    }),
  });

  const result = await response.json();
  console.log(result);
}



const labels = {
  en: {
    day: ["day", "days"],
    hour: ["hr", "hrs"],
    minute: ["min", "mins"]
  },
  es: {
    day: ["día", "días"],
    hour: ["hora", "horas"],
    minute: ["minuto", "minutos"]
  },
  nl: {
    day: ["dag", "dagen"],
    hour: ["h", "h"],      // same singular/plural in Dutch
    minute: ["min", "min"]
  }
};

function pluralize(value, [singular, plural]) {
  return value === 1 ? singular : plural;
}

const timeRemaining = computed(() => {
  const diff = targetDate - now.value;

  const t = labels[dataStore.language];

  if (diff <= 0) {
    return `0 ${t.day[1]} 0 ${t.hour[1]} 0 ${t.minute[1]}`;
  }

  const totalMinutes = Math.floor(diff / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return `${days} ${pluralize(days, t.day)} ${hours} ${pluralize(hours, t.hour)} ${minutes} ${pluralize(minutes, t.minute)}`;
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

.lang-container {
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  gap: 15px;
  z-index: 100;
}

.lang-link {
  background: none;
  border: none;
  color: #333; /* Or white if your background image is dark */
  font-family: 'Quicksand', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  cursor: pointer;
  padding: 5px;
}

.lang-link:hover {
  opacity: 1;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Custom RSVP Button */
.rsvp-button {
  background: transparent;
  border: 1px solid #2c2c2c;
  border-radius: 0; 
  padding: 12px 45px;
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.8rem;
  transition: all 0.4s ease;
}

.rsvp-button:hover {
  background: #2c2c2c;
  color: #fff;
}
</style>