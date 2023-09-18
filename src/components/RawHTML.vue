<template>
  <div class="example">
    <h2>Raw HTML</h2>
    <div v-html="rawHtml"></div> <!-- 1.b Raw HTML [v-html] -->
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const rawHtml = ref('<span style="color: red;">This is raw HTML</span>'); // Using ref from Composition API
    return { rawHtml };
  }
};
</script>
