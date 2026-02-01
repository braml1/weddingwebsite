<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <div class="">
      <div class="aboutus-title text-center mt-5">
        Travel

      </div>

      <div class="aboutus-text text-center mt-5">
        <p>
          <svg viewBox="0 0 32 32" width="40" height="40">
            <path fill-rule="evenodd"
              d="M27.525 4.475c-.818-.818-2.14-.835-2.979-.037l-5.718 5.438a.6.6 0 0 1-.594.138L6.59 6.34a.78.78 0 0 0-.788.193l-1.18 1.18 9.504 6.019a.6.6 0 0 1 .14.891l-4.517 5.42a.6.6 0 0 1-.579.204l-3.768-.755-1.191 1.191 4.276 2.633a.6.6 0 0 1 .196.196l2.633 4.276 1.191-1.191-.755-3.768a.6.6 0 0 1 .204-.579l5.42-4.517a.6.6 0 0 1 .891.14l6.019 9.504 1.18-1.18a.78.78 0 0 0 .193-.788l-3.673-11.645a.6.6 0 0 1 .137-.594l5.439-5.718c.798-.839.781-2.16-.037-2.979zm-3.806-.907c1.31-1.246 3.376-1.221 4.654.058s1.305 3.344.058 4.654l-5.194 5.461 3.567 11.307a1.98 1.98 0 0 1-.489 1.997l-1.71 1.71a.6.6 0 0 1-.931-.103l-6.054-9.559L13 22.944l.748 3.733a.6.6 0 0 1-.164.542l-1.956 1.955a.6.6 0 0 1-.935-.11l-2.956-4.802-4.802-2.956a.6.6 0 0 1-.11-.935l1.956-1.956a.6.6 0 0 1 .542-.164L9.056 19l3.851-4.62-9.559-6.054a.6.6 0 0 1-.103-.931l1.71-1.71a1.98 1.98 0 0 1 1.997-.489l11.307 3.567 5.461-5.194z"
              fill="currentColor"></path>
          </svg>
        </p>
        <h5>Getting In</h5>
      </div>
      <div class="aboutus-text text-start mt-3 mx-5">

        <p>
          For our guests traveling internationally, we highly recommend flying into Mexico City International Airport
          (MEX).
        </p>

        <p class="mt-4">
          International flights to Puebla (PBC) are available but limited, so most guests will find flying into Mexico
          City (MEX) to be the easiest and most flexible option.
        </p>
      </div>

      <div class="aboutus-text text-center mt-5">
        <p>
          <svg viewBox="0 0 32 32" width="40" height="40">


            <path fill-rule="evenodd"
              d="M13.029 3.43c-2.473 0-4.687 1.534-5.556 3.85l-.436 1.162c-.329-.196-.671-.267-.976-.293-.224-.019-.469-.015-.672-.012h0l-.194.002h-.008-.008a2.19 2.19 0 0 0-2.113 2.174c0 .898.563 1.683 1.354 2.011-.628.595-1.02 1.438-1.02 2.372v4a7.24 7.24 0 0 0 2.001 5.008v2.869a1.7 1.7 0 0 0 .167.796c.121.253.299.473.515.653a2.33 2.33 0 0 0 .738.409 2.63 2.63 0 0 0 1.691 0 2.33 2.33 0 0 0 .738-.409c.216-.18.394-.4.515-.653a1.7 1.7 0 0 0 .167-.796v-.647c.242.024.487.037.734.037h10.667c.248 0 .493-.012.734-.037v.647a1.7 1.7 0 0 0 .167.796 1.94 1.94 0 0 0 .515.653 2.33 2.33 0 0 0 .738.409 2.63 2.63 0 0 0 1.691 0c.27-.092.522-.229.738-.409s.394-.4.515-.653.177-.52.167-.796v-2.869a7.24 7.24 0 0 0 2.001-5.008v-4c0-.934-.392-1.777-1.021-2.372.791-.328 1.354-1.113 1.354-2.011A2.19 2.19 0 0 0 26.82 8.14h-.009-.008c-.058 0-.123-.001-.194-.002-.203-.003-.448-.008-.672.012-.305.026-.646.097-.976.293l-.436-1.162c-.868-2.316-3.082-3.85-5.556-3.85h-5.941zM25.4 9.611l.629 1.677h.765a.99.99 0 0 0 .94-.974.99.99 0 0 0-.94-.974l-.269-.003h0 0c-.178-.003-.326-.006-.485.008-.21.018-.363.062-.49.145a.92.92 0 0 0-.15.121zm-.067 3.019H6.667c-1.141 0-2.067.925-2.067 2.067v4a6.07 6.07 0 0 0 6.067 6.067h10.667a6.07 6.07 0 0 0 6.067-6.067v-4c0-1.141-.925-2.067-2.067-2.067zm-18.134-1.2h17.602l-1.398-3.729c-.693-1.847-2.459-3.071-4.432-3.071h-5.941c-1.973 0-3.739 1.224-4.432 3.071L7.199 11.43zm-1.228-.142h-.765a.99.99 0 0 1-.94-.974.99.99 0 0 1 .94-.974l.269-.003h0 0l.485.008c.21.018.363.062.49.145a.93.93 0 0 1 .15.121l-.629 1.677zm17.297 14.415a7.23 7.23 0 0 0 2.131-.982v1.865.014l.001.014a.5.5 0 0 1-.051.239.74.74 0 0 1-.199.247 1.13 1.13 0 0 1-.358.196 1.43 1.43 0 0 1-.459.074 1.43 1.43 0 0 1-.459-.074 1.13 1.13 0 0 1-.358-.196.74.74 0 0 1-.199-.247.5.5 0 0 1-.051-.239l.001-.014v-.014-.883zm-16.667-.982a7.23 7.23 0 0 0 2.131.982v.883.014l.001.014a.5.5 0 0 1-.051.239.74.74 0 0 1-.199.247 1.13 1.13 0 0 1-.358.196 1.43 1.43 0 0 1-.459.074 1.43 1.43 0 0 1-.459-.074 1.13 1.13 0 0 1-.358-.196.74.74 0 0 1-.199-.247.5.5 0 0 1-.051-.239l.001-.014v-.014-1.865zm5.999-7.682c0-.025.02-.045.045-.045h6.711c.025 0 .045.02.045.045v2.711c0 .025-.02.045-.045.045h-6.711c-.025 0-.045-.02-.045-.045v-2.711zm.045-1.245c-.687 0-1.245.557-1.245 1.245v2.711c0 .688.557 1.245 1.245 1.245h6.711c.687 0 1.245-.557 1.245-1.245v-2.711c0-.687-.557-1.245-1.245-1.245h-6.711zM8 15.014a1.41 1.41 0 1 0 0 2.821 1.41 1.41 0 1 0 0-2.821zm-2.61 1.41a2.61 2.61 0 1 1 5.221 0 2.61 2.61 0 1 1-5.221 0zm17.2 0a1.41 1.41 0 1 1 2.821 0 1.41 1.41 0 1 1-2.821 0zm1.41-2.61a2.61 2.61 0 1 0 0 5.221 2.61 2.61 0 1 0 0-5.221z"
              fill="currentColor"></path>
          </svg>
        </p>
        <h5>Arrival to Cholula, Puebla</h5>
      </div>
      <div class="aboutus-text text-start mt-3 mx-5">

        <p>
          From Mexico City Airport, there are lots of ways to get to Cholula!
          Please feel free to reach out if you need help arranging transportation to Cholula — we are happy to help.
        </p>

        <p class="mt-4">
          <u>1. Bus to Puebla + Taxi / Uber to Cholula </u>
          <br />
          Travel time: ~2.5-3 hours
          <br />
          Estimated cost:
          Bus (airport → Puebla): $15-$30 USD per person.
          Taxi/Uber (Puebla → Cholula): $15-$30 USD
          <br />
          Total: $30-$60 USD.
          <br />
          <br />
          At the airport, head to the "Terminal de Autobuses del Aeropuerto" located in Terminal 1 (ground level - near
          Door 7). Please note, you do not have to leave the airport to access it.
          <br />
          <br />
          Take a bus to Puebla CAPU Station. We recommend ADO bus line (Primera / ADO GL / ADO Platino) for the most
          comfort and several departures throughout the day.
          <br />
          <br />
          Once you arrive to Puebla bus station, take a 20 min taxi or Uber to Cholula.
        </p>


        <p class="mt-4">
          <u>2. Private Transfer or Authorized Airport Taxi </u>
          <br />
          Travel time: ~2–2.5 hours
          <br />
          Estimated cost: $100–$160 USD (one-way)
          <br />
          <br />
          After exiting customs, go to the official airport taxi counter.
          <br />
          <br />

          Book an authorized airport taxi or meet your pre-booked private transfer driver. You do not need to exit the
          airport.
          <br />
          <br />

          Give your destination in Cholula. Ride directly — no transfers needed.
        </p>



        <p class="mt-4">
          <u>3. Car Rental </u>
          <br />
          There are many car rental companies available at both airport terminals. Most agencies accept international
          driver's licenses, alongside your passport and credit card. Full coverage insurance is highly recommended.
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
  font-size: 16px;
  line-height: 25px;
  color: rgb(51, 51, 51);
  padding-left: 64px;
  padding-right: 64px;
  text-rendering: optimizeLegibility;
  letter-spacing: 1px;
}
</style>