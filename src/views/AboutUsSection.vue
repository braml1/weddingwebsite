<template>
  <BaseSection :image="image" @is-visible="$emit('is-visible', $event)">
    <span class="badge bg-warning">New Arrival</span>
    <h2 class="display-4 fw-bold">ABOUT US</h2>
    <p class="lead">Hand-forged in our local workshop using recycled gold.</p>
    <button class="btn btn-outline-dark">View Details</button>
  </BaseSection>
</template>

<script setup>
import BaseSection from './BaseSection.vue';
defineProps(['image']);
defineEmits(['is-visible']);
</script>