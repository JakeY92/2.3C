<template>
    <div>
      <p>Received prop: {{ propValue }}</p>
      <button @click="emitEvent">Emit Event</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['propValue'],
    emits: ['customEvent'],
    setup(props, { emit }) {
      const emitEvent = () => {
        emit('customEvent', 'Event data');
      };
  
      return { emitEvent };
    }
  };
  </script>
  