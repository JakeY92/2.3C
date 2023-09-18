<template>
  <div class="example">
    <h2>Methods</h2>
    <button @click="increment">Increment</button> <!-- 2. Methods -->
    {{ count }}
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0); // Using ref from Composition API

    // 2. Methods
    const increment = () => {
      count.value++;
    };

    return { count, increment };
  }
};
</script>
