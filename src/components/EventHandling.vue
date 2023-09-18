<template>
  <div class="example">
    <h2>Event Handling</h2>
    <button @click="increment">Increment</button> <!-- 7.a Inline Handlers -->
    <button @click="handleClick">Handle Click</button> <!-- 7.b Method Handlers -->
    {{ count }}
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    // 7.a Inline Handlers
    const increment = () => {
      count.value++;
    };

    // 7.b Method Handlers
    const handleClick = () => {
      alert('Button clicked!');
    };

    return { count, increment, handleClick };
  }
};
</script>
