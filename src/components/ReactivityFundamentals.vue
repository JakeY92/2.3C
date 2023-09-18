<template>
  <div class="example">
    <h2>Reactivity Fundamentals</h2>
    <p>{{ reactiveValue }}</p> <!-- 3. Reactivity Fundamentals [ref()] -->
  </div>
</template>

<script setup> // 3. Reactivity Fundamentals [<script setup>]
import { ref } from 'vue';

const reactiveValue = ref('Reactive Value'); // Using ref from Composition API
</script>
