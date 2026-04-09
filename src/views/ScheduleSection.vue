<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="">
      <div class="aboutus-title text-center mt-5">
        The Celebration Schedule
      </div>
      <!-- <div class="aboutus-text py-3">
        The celebration will unfold within a historic hacienda, 
        where time slows and every moment unfolds with intention.
      </div> -->


        <Schedule />

      

      
    </div>
  </BaseSection>
</template>

<script setup>
import Schedule from '@/components/Schedule.vue';
import BaseSection from './BaseSection.vue';
defineProps(['image']);
defineEmits(['is-visible']);
</script>

<style scoped>
.aboutus-title {
  font-family: "Scope One", serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 1px;
  font-size: 36px;
  color: rgb(51, 51, 51);
}

.aboutus-text {
  font-family: "Quicksand";
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 25px;
  color: rgb(51, 51, 51);
  padding: 0 5vw; 
  text-rendering: optimizeLegibility;
  letter-spacing: 1px;
}
</style>