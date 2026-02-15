<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="">
      <div class="aboutus-title text-center mt-5">
        Q & A
      </div>

      <div class="aboutus-text text-start mt-5 mx-5 fw-bold">
        When is the RSVP deadline?
      </div>

      <div class="aboutus-text text-start mt-2 mx-5">
        Please RSVP by January 31, so we can have an accurate headcount.
      </div>

      <div class="aboutus-text text-start mt-5 mx-5 fw-bold">
        Can I bring a date?
      </div>

      <div class="aboutus-text text-start mt-2 mx-5">
        Please check your invite for your +1!
      </div>

      <div class="aboutus-text text-start mt-5 mx-5 fw-bold">
        Are kids welcome?
      </div>

      <div class="aboutus-text text-start mt-2 mx-5">
        We are happy to welcome children at our wedding and look forward to celebrating with families. We kindly ask
        parents to supervise their children throughout the event so everyone can fully enjoy the ceremony and
        celebration.
      </div>


      <div class="aboutus-text text-start mt-5 mx-5 fw-bold">
        What will the weather be like?
      </div>

      <div class="aboutus-text text-start mt-2 mx-5">
        February in Cholula brings mild, pleasant weather — warm days with lots of sunshine and cool evenings. Daytime
        temperatures typically reach the mid-20s °C, while nights can dip into the low teens °C. It’s usually dry and
        comfortable.
      </div>

      <div class="aboutus-text text-start mt-5 mx-5 fw-bold">
        Where should I park?
      </div>

      <div class="aboutus-text text-start mt-2 mx-5">
        Valet parking will be available at the Hacienda.
      </div>

      <div class="aboutus-text text-start mt-5 mx-5 fw-bold">
        Is the wedding indoors or outdoors?
      </div>

      <div class="aboutus-text text-start mt-2 mx-5">
        Our wedding ceremony is outdoors, but the reception will be inside.
      </div>

      <div class="aboutus-text text-start mt-5 mx-5 fw-bold">
        Whom should I call with questions?
      </div>

      <div class="aboutus-text text-start mt-2 mx-5 mb-5">
        Please contact Mariel or Bram directly through WhatsApp if you have any other question.
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