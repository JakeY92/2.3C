<template>
    <div>
      <p>Item ID: {{ item.id }}</p>
      <p>Item Name: {{ item.name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['item']
  };
  </script>
  