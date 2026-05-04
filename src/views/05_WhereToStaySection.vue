<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="">
      <div class="aboutus-title text-center mt-5">
        Where To Stay
      </div>

      <div class="aboutus-text text-start mt-3 mx-5">

        If staying in Cholula, we recommend the following hotels for their charm, central location, and proximity
        to the venue :

        <ul class="">
          <li><a href="https://casaeva.travel/" target="_blank">Casa Eva</a> </li>
          <li><a href="https://laquintaluna.com.mx/" target="_blank">Quinta Luna</a></li>
          <li><a href="https://estrelladebelem.com.mx" target="_blank">Estrella de Belém</a></li>
          <li><a href="https://tilahotel.com/" target="_blank">Hotel Tila</a> </li>
        </ul>


        Staying in Puebla is also a great option (about a 30-minute drive to the venue). We
        recommend:
        <ul class="">
          <li><a href="https://www.casareyna.com/" target="_blank">CasaReyna</a> </li>
          <li><a href="https://www.banyantree.com/mexico/puebla" target="_blank">Banyan Tree</a></li>
        </ul>

        We suggest using Uber after the celebration, as there are many
        breathalyzer checkpoints in the area.
      </div>

      <div class="aboutus-title text-center mt-5">
        Things to do
      </div>

      <div class="aboutus-text text-start mt-3 mx-5">
        <p>
        For those spending extra time in Cholula, here are a few of our favorite spots for food, drinks, and exploring.
        </p>


        Food & drinks:
        <ul class="">
          <li><a href="https://ciudadsagrada.mx/" target="_blank">Ciudad Sagrada</a> </li>
          <li><a href="https://www.santouagastrobar.com/" target="_blank">Santóua</a></li>
          <li><a href="https://www.instagram.com/licoreriasanpedritocholula/" target="_blank">Licoreria San Pedrito </a></li>
          <li><a href="https://cus-cus-cus.res-menu.net/" target="_blank">Cus Cus Cus</a> </li>
        </ul>

        To explore:
        <ul class="">
          <li>Great Pyramid of Cholula </li>
          <li>Santuario de Nuestra Señora de los Remedios</li>
          <li>Zócalo de San Pedro Cholula</li>
          <li>Iglesia de San Francisco Acatepec</li>
        </ul>



      </div>

    </div>
  </BaseSection>
</template>

<script setup>
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
  letter-spacing: 1px;
  font-size: 17px;
  line-height: 25px;
  color: rgb(51, 51, 51);
  padding-left: 64px;
  padding-right: 64px;
}
</style>