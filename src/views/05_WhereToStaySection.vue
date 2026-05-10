<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="">
      <div class="aboutus-title text-center mt-5">
        {{ dataStore.t('stay.title') }}
      </div>
 
      <div class="aboutus-text text-start mt-3">
        {{ dataStore.t('stay.cholula.intro') }}
 
        <ul class="">
          <li><a href="https://casaeva.travel/" target="_blank">Casa Eva</a></li>
          <li><a href="https://laquintaluna.com.mx/" target="_blank">Quinta Luna</a></li>
          <li><a href="https://estrelladebelem.com.mx" target="_blank">Estrella de Belém</a></li>
          <li><a href="https://tilahotel.com/" target="_blank">Hotel Tila</a></li>
        </ul>
 
        {{ dataStore.t('stay.puebla.intro') }}
        <ul class="">
          <li><a href="https://www.casareyna.com/" target="_blank">CasaReyna</a></li>
          <li><a href="https://www.banyantree.com/mexico/puebla" target="_blank">Banyan Tree</a></li>
        </ul>
 
        {{ dataStore.t('stay.uberNote') }}
      </div>
 
      <div class="aboutus-title text-center mt-5">
        {{ dataStore.t('stay.thingsToDo.title') }}
      </div>
 
      <div class="aboutus-text text-start mt-3">
        <p>{{ dataStore.t('stay.thingsToDo.intro') }}</p>
 
        {{ dataStore.t('stay.thingsToDo.foodLabel') }}
        <ul class="">
          <li><a href="https://ciudadsagrada.mx/" target="_blank">Ciudad Sagrada</a></li>
          <li><a href="https://www.santouagastrobar.com/" target="_blank">Santóua</a></li>
          <li><a href="https://www.instagram.com/licoreriasanpedritocholula/" target="_blank">Licoreria San Pedrito</a></li>
          <li><a href="https://cus-cus-cus.res-menu.net/" target="_blank">Cus Cus Cus</a></li>
        </ul>
 
        {{ dataStore.t('stay.thingsToDo.exploreLabel') }}
        <ul class="">
          <li>{{ dataStore.t('stay.thingsToDo.explore1') }}</li>
          <li>{{ dataStore.t('stay.thingsToDo.explore2') }}</li>
          <li>{{ dataStore.t('stay.thingsToDo.explore3') }}</li>
          <li>{{ dataStore.t('stay.thingsToDo.explore4') }}</li>
        </ul>
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