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
          <li><a href="https://www.booking.com/hotel/mx/boutique-camino-del-bosque" target="_blank">Camino Del Bosque </a> 
            <br/>
             (<svg class="ms-0 ps-0 mb-1" style="width: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"/></svg> 
                     {{ dataStore.t('stay.outsidecenter') }})
          </li>
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