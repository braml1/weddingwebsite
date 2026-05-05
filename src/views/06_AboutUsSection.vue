<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">

    <div class="aboutus-title text-center mt-5">
      Our Story
    </div>

    <div class="aboutus-text text-start mt-5 mx-4">

      <p> Our story began far from where either of us grew up. <br />

        Bram is from Belgium, Mariel from Mexico — and somehow, life brought us both to Calgary, a city that quickly
        became home, and the place where everything began.

      </p>
      <p>
        What started as a chance meeting grew into a love shaped by curiosity, adventure, and a shared sense of humor.
      </p>
      <p>
        From spontaneous trips to the quiet rhythm of everyday life, we discovered how much we love exploring the world
        together —
        and finding joy in even the smallest moments.
      </p>

      <p>
        As our journey continues, we’ve chosen a place to celebrate that feels just as meaningful as the path that
        brought us here.
      </p>


    </div>
    
    <div class="divider pt-5"></div>


    <div class="aboutus-title text-center mt-5">
      Final Note
    </div>


    <div class="aboutus-text text-center my-5 mx-4 ">
      <p>
        We are so grateful to share this moment with you.
      </p>
      <p>
        We can’t wait to celebrate together in Cholula!
      </p>
      With love,<br>
      Mariel & Bram

    </div>


  </BaseSection>
</template>

<script setup>
import BaseSection from './BaseSection.vue';
defineProps(['image']);
defineEmits(['is-visible']);
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