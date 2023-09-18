<template>
  <div class="example">
    <h2>Class and Style Bindings</h2>
    <div :class="dynamicClass" :style="dynamicStyle">This is a styled div</div> <!-- 5. Class and Style Bindings -->
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const dynamicClass = ref('my-class'); // 5.a Binding HTML class [v-bind:class]
    const dynamicStyle = ref({ color: 'red', backgroundColor: 'lightgrey', padding: '10px' }); // 5.b Binding Inline Styles [v-bind:style]
    return { dynamicClass, dynamicStyle };
  }
};
</script>

<style>
.my-class {
  border: 2px solid red;
}
</style>
