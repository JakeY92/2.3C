<template>
  <div class="example">
    <h2>Computed Properties</h2>
    <p>{{ doubledCount }}</p> <!-- 4. Computed Properties -->
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(5);
    const doubledCount = computed(() => count.value * 2); // 4. Computed Properties
    return { doubledCount };
  }
};
</script>
