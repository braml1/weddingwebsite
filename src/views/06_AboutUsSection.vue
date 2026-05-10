<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
 
    <div class="aboutus-title text-center mt-5">
      {{ dataStore.t('story.title') }}
    </div>
 
    <div class="aboutus-text text-start mt-5 mx-4">
      <p>{{ dataStore.t('story.p1') }}</p>
      <p>{{ dataStore.t('story.p2') }}</p>
      <p>{{ dataStore.t('story.p3') }}</p>
      <p>{{ dataStore.t('story.p4') }}</p>
    </div>
 
    <div class="divider pt-5"></div>
 
    <div class="aboutus-title text-center mt-5">
      {{ dataStore.t('story.finalNote.title') }}
    </div>
 
    <div class="aboutus-text text-center my-5 mx-4">
      <p>{{ dataStore.t('story.finalNote.p1') }}</p>
      <p>{{ dataStore.t('story.finalNote.p2') }}</p>
      {{ dataStore.t('story.finalNote.closing') }}<br>
      Mariel & Bram
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
.divider {
  border-bottom: 1px solid #eee;
}
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