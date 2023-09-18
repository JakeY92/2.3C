<template>
  <div class="example">
    <h2>Watchers</h2>
    <input v-model="inputValue" type="text">
    <p>{{ watchedValue }}</p> <!-- 9. Watchers -->
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const inputValue = ref('');
    const watchedValue = ref('');

    // 9. Watchers
    watch(inputValue, (newValue) => {
      watchedValue.value = `You entered: ${newValue}`;
    });

    return { inputValue, watchedValue };
  }
};
</script>
