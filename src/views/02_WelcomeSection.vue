<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="">
      <div class="aboutus-title text-center mt-5">
         {{ dataStore.t('welcome.title') }} 
      </div>

      <div class="aboutus-text text-center mt-5 mx-4">
        <p>        
          {{ dataStore.t('welcome.p1') }} 
        </p>

        <p>
          It means so much to us to celebrate surrounded by the people we love most. 
          We’ve thoughtfully designed a weekend rooted in connection, warmth and shared moments, 
          and we hope it feels as special to you as it does to us.

        </p>
        <p>
          Everything you need to enjoy your time with us is below.
        </p>
        <p>

          We can’t wait to celebrate together!
        </p>
      </div>

    </div>
  </BaseSection>
</template>

<script setup>

import BaseSection from './BaseSection.vue';
import { useDataStore } from '@/stores/DataStore'


const dataStore = useDataStore()
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
  letter-spacing: 1px;
  font-size: 17px;
  line-height: 25px;
  color: rgb(51, 51, 51);
  padding: 0 5vw;   
  text-rendering: optimizeLegibility;
  letter-spacing: 0.03em;
}
</style>