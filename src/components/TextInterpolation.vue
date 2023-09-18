<template>
  <div class="example">
    <h2>Text Interpolation</h2>
    <p>{{ message }}</p> <!-- 1.a Text Interpolation -->
    <p>{{ 5 + 5 }}</p> <!-- 1.d JavaScript expressions inside syntax -->
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue!'); // Using ref from Composition API
    return { message };
  }
};
</script>
