<template>
  <div class="main-layout">

    <div class="left-pane">
      <div class="static-overlay">
        <div class="overlay-title">Mariel & Bram</div>
        <div class="overlay-text"> We can't wait to share our special day with you.</div>

        <transition name="fade-content" mode="out-in">
          <div :key="activeCaption">
            <p class="overlay-text">{{ activeCaption }}</p>
          </div>
        </transition>
      </div>

      <transition name="vanish" mode="out-in">
        <img :key="activeImage" :src="activeImage" class="sticky-img" />
      </transition>
    </div>

    <div class="right-pane">
      <RingSection image="/img/ring.webp" @is-visible="updateImage" />
      <AboutUsSection image="/img/runInSnow.webp" @is-visible="updateImage" />
      <TravelSection image="/img/walkInForests.webp" @is-visible="updateImage" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RingSection from './RingSection.vue';
import AboutUsSection from './AboutUsSection.vue';
import TravelSection from './TravelSection.vue';

// Use absolute paths pointing to the 'public' folder
const sections = [
  { title: "The Ring", description: "Crafted with precision.", image: "/img/ring.webp" },
  { title: "The Forge", description: "Where fire meets metal.", image: "/img/runInSnow.webp" }
];

const activeImage = ref(sections[0].image);

const updateImage = (newImageUrl) => {
  activeImage.value = newImageUrl;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Scope+One&display=swap');



.quicksand-400 {
  font-family: "Quicksand";
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.quicksand-300 {
  font-family: "Quicksand";
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}


.main-layout {
  display: flex;
  width: 100%;
}

.left-pane {
  width: 60%;
  height: 100vh;
  /* Pane is exactly viewport height */
  position: sticky;
  top: 0;
  /* Stick to the very top */
  background: #111;
  overflow: hidden;
}

.left-pane::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 90% opacity black */
  /* background-color: rgba(0, 0, 0, 0.1);  */
  background-image: linear-gradient(
    to bottom, 
    rgba(0, 0, 0, 0) 0%, 
    rgba(0, 0, 0, 0.5) 100%
  );
  /* Ensures it stays above the image but below the text box */
  z-index: 5; 
  pointer-events: none; /* Allows clicks to pass through if needed */
}

/* Ensure images fill the sticky area */
.sticky-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
}

.right-pane {
  width: 40%;
  background: #fff;
}

.static-overlay {
  position: absolute;
  top: 80%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 10;
  width: 500px;
  padding: 2rem;
}

.overlay-title {
  font-family: "Scope One", serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 1px;
  font-size: 56px;
  color: white;
}

.overlay-text {
  color: white;
  margin: 0;
  font-size: 17px;
    font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

/* On Mobile: Stack them and hide the sticky pane */
@media (max-width: 767px) {
  .left-pane {
    display: none;
  }

  .right-pane {
    width: 100%;
  }
}

/* Vanish Animation */
.vanish-enter-active,
.vanish-leave-active {
  transition: opacity 0.4s;
}

.vanish-enter-from,
.vanish-leave-to {
  opacity: 0;
}
</style>