<template>
  <div class="example">
    <h2>8. Form Input Bindings</h2>
    <h3>a. v-model with &lt;input type="text"&gt;</h3>
    <input v-model="textInput" type="text">
    <h3>a. v-model with &lt;input type="checkbox"&gt;</h3>
    <input v-model="checkboxInput" type="checkbox">
    <h3>a. v-model with &lt;input type="radio"&gt;</h3>
    <input v-model="radioInput" type="radio" value="option1">
    <h3>a. v-model with &lt;select&gt;</h3>
    <select v-model="selectInput">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    <h3>a. v-model with &lt;textarea&gt;</h3>
    <textarea v-model="textareaInput"></textarea>
    <h3>b. v-model modifiers [.lazy]</h3>
    <label>Lazy (updates on blur):</label>
    <input v-model.lazy="lazyInput" type="text">
    <h3>b. v-model modifiers [.number]</h3>
    <label>Number (casts to number):</label>
    <input v-model.number="numberInput" type="text">
    <h3>b. v-model modifiers [.trim]</h3>
    <label>Trim (removes whitespace):</label>
    <input v-model.trim="trimInput" type="text">
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const textInput = ref('');
    const checkboxInput = ref(false);
    const radioInput = ref('');
    const selectInput = ref('');
    const textareaInput = ref('');
    const lazyInput = ref(''); // 8.b v-model modifiers [.lazy]
    const numberInput = ref(0); // 8.b v-model modifiers [.number]
    const trimInput = ref(''); // 8.b v-model modifiers [.trim]
    return { textInput, checkboxInput, radioInput, selectInput, textareaInput, lazyInput, numberInput, trimInput };
  }
};
</script>

<style>
.example {
  display: flex;
  flex-direction: column; 
  gap: 10px; 
}

input,
select,
textarea {
  width: 100%; 
  padding: 5px; 
  margin-bottom: 10px; 
}

textarea {
  height: 60px;
  resize: vertical; 
}
</style>
