<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="">
      <div class="aboutus-title text-center mt-5">
        {{ dataStore.t('qa.title') }}
      </div>
 
      <div class="aboutus-text text-start mt-5 mx-4 fw-bold">
        {{ dataStore.t('qa.q1.question') }}
      </div>
      <div class="aboutus-text text-start mt-0 mx-4">
        {{ dataStore.t('qa.q1.answer') }}
      </div>
 
      <div class="aboutus-text text-start mt-4 mx-4 fw-bold">
        {{ dataStore.t('qa.q2.question') }}
      </div>
      <div class="aboutus-text text-start mt-0 mx-4">
        {{ dataStore.t('qa.q2.answer') }}
      </div>
 
      <div class="aboutus-text text-start mt-4 mx-4 fw-bold">
        {{ dataStore.t('qa.q3.question') }}
      </div>
      <div class="aboutus-text text-start mt-0 mx-4">
        {{ dataStore.t('qa.q3.answer') }}
      </div>
 
      <div class="aboutus-text text-start mt-4 mx-4 fw-bold">
        {{ dataStore.t('qa.q4.question') }}
      </div>
      <div class="aboutus-text text-start mt-0 mx-4">
        {{ dataStore.t('qa.q4.answer') }}
      </div>
 
      <div class="aboutus-text text-start mt-4 mx-4 fw-bold">
        {{ dataStore.t('qa.q5.question') }}
      </div>
      <div class="aboutus-text text-start mt-0 mx-4">
        {{ dataStore.t('qa.q5.answer') }}
      </div>
 
      <div class="aboutus-text text-start mt-4 mx-4 fw-bold">
        {{ dataStore.t('qa.q6.question') }}
      </div>
      <div class="aboutus-text text-start mt-0 mx-4">
        {{ dataStore.t('qa.q6.answer') }}
      </div>
 
      <div class="aboutus-text text-start mt-4 mx-4 fw-bold">
        {{ dataStore.t('qa.q7.question') }}
      </div>
      <div class="aboutus-text text-start mt-0 mx-4">
        {{ dataStore.t('qa.q7.answer') }}
      </div>
 
      <div class="aboutus-text text-start mt-4 mx-4 fw-bold">
        {{ dataStore.t('qa.q8.question') }}
      </div>
      <div class="aboutus-text text-start mt-0 mx-4">
        {{ dataStore.t('qa.q8.answer') }}
      </div>
 
      <div class="aboutus-text text-start mt-4 mx-4 fw-bold">
        {{ dataStore.t('qa.q9.question') }}
      </div>
      <div class="aboutus-text text-start mt-0 mx-4 mb-5">
        {{ dataStore.t('qa.q9.answer') }}
      </div>
 
    </div>
  </BaseSection>
</template>


<script setup>
import BaseSection from './BaseSection.vue';
defineProps(['image']);
defineEmits(['is-visible']);

import { useDataStore } from '@/stores/DataStore'
const dataStore = useDataStore()

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
}
</style>