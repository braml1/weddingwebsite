<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="ring-background  d-flex flex-column justify-content-center align-items-center text-center">
      <div class="instrument-sans-400">
        Saturday <br />
        February 20, 2027
      </div>

      <div class="quicksand-400 location mt-3">
        Hacienda San Jose Actipan, Cholula <br />
        Puebla, Mexico
      </div>

      <div class="quicksand-400 countdown mt-3">
        384 DAYS 6 HRS 7 MINS
      </div>

      <button class="btn btn-outline-dark round-button mt-5 px-4 py-2"> RSVP</button>


    </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from './BaseSection.vue';
defineProps(['image']);
defineEmits(['is-visible']);
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