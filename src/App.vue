<template>
  <div id="app">
     <nav>
       <router-link to="/html-quiz">HTML Quiz</router-link> |
       <router-link to="/css-quiz">CSS Quiz</router-link> |
       <router-link to="/javascript-quiz">JavaScript Quiz</router-link>
     </nav>
     <router-view/>
  </div>
 </template>
 

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
