<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(quiz, index) in quizzes" :key="index">
        <div class="card py-4">
          <img :src="quiz.image" class="card-img-top" :alt="quiz.name" />
          <div class="card-body">
            <h5 class="card-title">{{ quiz.name }}</h5>
            <p class="card-text">{{ quiz.description }}</p>
            <router-link :to="quiz.path" class="btn btn-primary"
              >Go to Quiz</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardComponent",
  data() {
    return {
      quizzes: [
        {
          name: "HTML Quiz",
          description: "Test your knowledge of HTML!",
          path: "/html-quiz",
          image: require("@/assets/html-5.png"), // Using require to ensure the path is resolved
        },
        {
          name: "CSS Quiz",
          description: "Challenge yourself with our CSS quiz!",
          path: "/css-quiz",
          image: require("@/assets/css-3.png"), // Using require to ensure the path is resolved
        },
        {
          name: "JavaScript Quiz",
          description: "How well do you know JavaScript? Find out now!",
          path: "/javascript-quiz",
          image: require("@/assets/javascript.png"), // Using require to ensure the path is resolved
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  text-align: center;
}

.card-img-top {
  width: 100px;
  margin: auto;
}

/* Add any specific styling here */
</style>
