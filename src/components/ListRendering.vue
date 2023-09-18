<template>
  <div class="example">
    <h2>List Rendering</h2>
    <!-- 6.a v-for with an Object -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <!-- 6.b v-for with a Range -->
    <ul>
      <li v-for="n in 5" :key="n">Item {{ n }}</li>
    </ul>
    <!-- 6.c v-for on <template> -->
    <template v-for="item in items" :key="item.id">
      <p>{{ item.name }}</p>
      <p>{{ item.description }}</p>
    </template>
    <!-- 6.d v-for with v-if-->
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
    <!-- 6.e v-for with a Component -->
    <my-component v-for="item in items" :key="item.id" :item="item"></my-component>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import MyComponent from './MyComponent.vue';

export default {
  components: {
    MyComponent
  },
  setup() {
    const items = ref([
      { id: 1, name: 'Item 1', description: 'Description 1', show: true },
      { id: 2, name: 'Item 2', description: 'Description 2', show: false }
    ]);

    // 6.d v-for with v-if
    const filteredItems = computed(() => items.value.filter(item => item.show));

    return { items, filteredItems };
  }
};
</script>

<style>
.example {
  display: flex;
  flex-direction: column;
  align-items: center; 
}

ul {
  padding: 0; 
  text-align: left; 
}

li {
  margin: 5px 0; 
}

p {
  text-align: center; 
}
</style>