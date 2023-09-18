<template>
    <div class="example">
      <h2>Components</h2>
      <child-component :propValue="propValue" @customEvent="handleEvent"></child-component> <!-- 10.a Props, 10.b Events [$emit] -->
      <slot-component>
        <template #header>
          <h3>Header Slot</h3> <!-- 10.c Slots -->
        </template>
        <template #footer>
          <h3>Footer Slot</h3> <!-- 10.c Slots -->
        </template>
      </slot-component>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import ChildComponent from './ChildComponent.vue';
  import SlotComponent from './SlotComponent.vue';
  
  export default {
    components: {
      ChildComponent,
      SlotComponent
    },
    setup() {
      const propValue = ref('Prop Value');
  
      // 10.b Events [$emit]
      const handleEvent = () => {
        alert('Event received!');
      };
  
      return { propValue, handleEvent };
    }
  };
  </script>
  