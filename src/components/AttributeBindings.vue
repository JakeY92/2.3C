<template>
  <div class="example">
    <h2>Attribute Bindings</h2>
    <div :id="dynamicId" :style="dynamicStyle"></div> <!-- 1.c Attribute Bindings [v-bind:id], [v-bind:style] -->
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const dynamicId = ref('my-id');
    const dynamicStyle = ref('background-color: lightblue; height: 50px; width: 100px;'); // Adding dynamic style
    return { dynamicId, dynamicStyle };
  }
};
</script>
