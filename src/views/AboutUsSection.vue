<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="">
      <div class="aboutus-title text-center mt-5">
        About Us
      </div>

      <div class="aboutus-text text-start mt-5 mx-5">

        <p>
          Our story began far from where either of us grew up. Bram is from Belgium, Mariel is from Mexico, and somehow
          life brought us together in Calgary — a city that quickly became home and the starting point of everything that
          followed. What began as a chance meeting grew into a love built on curiosity, adventure, and a lot of laughter.
          From spontaneous trips to quiet everyday moments, we discovered early on that we love exploring the world
          together, trying new foods, and laughing late into the night.
        </p>

        <p class="pt-4">
          As our journey continues, we chose a place that feels just as meaningful as the path that led us here. We invite
          you to join us as we gather to celebrate our wedding and the beginning of our next chapter.
        </p>
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