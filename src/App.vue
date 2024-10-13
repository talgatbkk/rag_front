<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-link">salyq.com</router-link>
      <router-link to="/chat" class="nav-link">Консультация</router-link>
      <router-link to="/about" class="nav-link">Про нас</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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

nav {
  background-color: #007bff;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
}

.nav-link:hover {
  text-decoration: underline;
}

.router-view-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
