<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div>
  <div id="nav">
    <button class="btn1">
      <router-link to="/dashboard" class="dashboard"> Dashboard </router-link>
    </button> |
    <button class="btn2">
      <router-link to="/user" class="user"> User </router-link> 
    </button> 
    <button class="btn3">
      <router-link to="/About" class="About"> About </router-link> 
    </button> 
  </div>
  <router-view></router-view>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 8px;
}
body {
  background-color: rgb(240, 123, 220)
}

#nav {
  padding: 20px;
  background-color: #98bcda;
  color: #e4e7e0;
}

.btn1 {
  border-radius: 12%;
  background-color: rgb(240, 123, 220);
}

.btn2 {
  border-radius: 12%;
  background-color: rgb(240, 123, 220);
}
.btn3 {
  border-radius: 12%;
  background-color: rgb(240, 123, 220);
}
</style>
