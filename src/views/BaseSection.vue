<template>
  <section ref="target" class="section-block">
    <div class="content-wrapper">
      <img :src="image" class="mobile-only-image" alt="Section visual" />
      
      <div class="slotted-content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSectionObserver } from '@/composables/useSectionObserver';

const props = defineProps(['image']);
const emit = defineEmits(['is-visible']);

// Use the logic-only function we created earlier
const { target } = useSectionObserver(props, emit);
</script>

<style scoped>
.section-block {
  min-height: 100vh;
  display: flex;
  /* align-items: center; */
  /* padding: 5rem 2rem; */
  border-bottom: 1px solid #eee;
}

.content-wrapper {
  width: 100%;
}

.mobile-only-image {
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
  display: block; /* Visible by default (mobile) */
}

/* --- THE FIX --- */
@media (min-width: 768px) {
  .mobile-only-image {
    display: none; /* Completely hide the right-side image on Desktop */
  }
}

.slotted-content {
  text-align: left;
}
</style>