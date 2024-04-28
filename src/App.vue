<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Code Challenge Hub</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/html-quiz"
                >HTML Quiz</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/css-quiz"
                >CSS Quiz</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/javascript-quiz"
                >JavaScript Quiz</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
