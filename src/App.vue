<template>
  <div id="app">
    <nav>
      <router-link to="/text-interpolation">Text Interpolation</router-link>
      <router-link to="/raw-html">Raw HTML</router-link>
      <router-link to="/attribute-bindings">Attribute Bindings</router-link>
      <router-link to="/methods">Methods</router-link>
      <router-link to="/reactivity-fundamentals">Reactivity Fundamentals</router-link>
      <router-link to="/computed-properties">Computed Properties</router-link>
      <router-link to="/class-and-style-bindings">Class and Style Bindings</router-link>
      <router-link to="/list-rendering">List Rendering</router-link>
      <router-link to="/event-handling">Event Handling</router-link>
      <router-link to="/form-input-bindings">Form Input Bindings</router-link>
      <router-link to="/watchers">Watchers</router-link>
      <router-link to="/components">Components</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  background-color: #f4f4f4;
}

nav {
  background-color: #f8f8f8;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: 1px solid #e0e0e0;
}

router-link {
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  margin: 5px;
  font-weight: 600;
}

router-link:hover {
  background-color: #e0e0e0;
  color: #555;
}

.content {
  padding: 20px;
  width: 100%;
}

.example {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 20px auto; 
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 800px; 
  width: 100%; 
  text-align: center; 
}
</style>


