<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f2f5;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.router-view-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
