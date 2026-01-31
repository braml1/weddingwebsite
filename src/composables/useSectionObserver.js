import { onMounted, onUnmounted, ref } from 'vue';

export function useSectionObserver(props, emit) {
  const target = ref(null);
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // We emit the image associated with this specific section
        emit('is-visible', props.image);
      }
    }, { threshold: 0.5 });

    if (target.value) observer.observe(target.value);
  });

  onUnmounted(() => observer?.disconnect());

  return { target };
}