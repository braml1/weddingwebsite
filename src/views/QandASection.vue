<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="">
      <div class="aboutus-title text-center mt-5">
        Q & A
      </div>

      <div class="aboutus-text text-start mt-5 mx-4 fw-bold">
        When is the RSVP deadline?
      </div>

      <div class="aboutus-text text-start mt-2 mx-4">
        Please RSVP by January 15 so we can finalize arrangements.
      </div>

      <div class="aboutus-text text-start mt-5 mx-4 fw-bold">
        Can I bring a guest?
      </div>

      <div class="aboutus-text text-start mt-2 mx-4">
        Please refer to your invitation for details regarding your guest.
      </div>

      <div class="aboutus-text text-start mt-5 mx-4 fw-bold">
        Are children welcome?
      </div>

      <div class="aboutus-text text-start mt-2 mx-4">
        We are delighted to welcome children and celebrate with families. We kindly ask that little ones remain supervised throughout the evening.
      </div>

      <div class="aboutus-text text-start mt-5 mx-4 fw-bold">
        What should I wear?
      </div>

      <div class="aboutus-text text-start mt-2 mx-4">
        The wedding day dress code is formal. The ceremony will be outdoors, followed by an indoor dinner. 
        We recommend bringing a light layer for the evening.
      </div>


      <div class="aboutus-text text-start mt-5 mx-4 fw-bold">
        What will the weather be like?
      </div>

      <div class="aboutus-text text-start mt-2 mx-4">
        February in Cholula is typically warm and sunny during the day, with cooler evenings.
      </div>



      <div class="aboutus-text text-start mt-5 mx-4 fw-bold">
        Where can I park?
      </div>

      <div class="aboutus-text text-start mt-2 mx-4">
        Free valet parking will be available at the hacienda.
      </div>

      <div class="aboutus-text text-start mt-5 mx-4 fw-bold">
        Can I take photos during the ceremony?
      </div>

      <div class="aboutus-text text-start mt-2 mx-4">
        We invite you to be fully present during the ceremony and kindly ask that phones remain away.
      </div>

      <div class="aboutus-text text-start mt-5 mx-4 fw-bold">
        Do you have any wishes for gifts?
      </div>

      <div class="aboutus-text text-start mt-2 mx-4">
        Just being there with us is more than enough. Your presence is what we value most.
      </div>

      <div class="aboutus-text text-start mt-5 mx-4 fw-bold">
        Whom should I call with questions?
      </div>

      <div class="aboutus-text text-start mt-2 mx-4 mb-5">
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
  padding: 0 5vw; 
}
</style>