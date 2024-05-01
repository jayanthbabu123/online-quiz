<template>
  <div class="container mt-5">
    <div v-if="showInstructions" class="card text-center p-0">
      <div class="card-header">
        <strong>Welcome to the JavaScript Quiz!</strong>
      </div>
      <div class="card-body">
        <h5 class="card-title text-primary">Quiz Instructions</h5>
        <p class="card-text">
          Test your JavaScript knowledge with our interactive quiz. Follow these instructions carefully.
        </p>
        <ul class="text-start">
          <li>The quiz consists of questions covering essential JavaScript topics.</li>
          <li>Some questions will include code snippets for a better understanding.</li>
          <li>Select one option per question to proceed to the next one.</li>
          <li>Your results and explanations will be displayed after completing the quiz.</li>
        </ul>
        <button type="button" class="btn btn-primary" @click="startQuiz">
          Start Quiz
        </button>
      </div>
      <div class="card-footer text-muted">Good luck!</div>
    </div>

    <div class="container quiz-container mt-5" v-if="!submitted && !showInstructions">
      <div class="row mt-3">
        <div class="col-12 text-center quiz-heading text-success">
          <strong>JavaScript Quiz</strong>
        </div>
        <div class="col-12 text-end">
          <p class="timer">Time Remaining: {{ minutes }}:{{ seconds }}</p>
        </div>
      </div>
      <div v-if="currentQuestion < questions.length" class="card p-3 mb-3">
        <p class="card-title">
          Q{{ currentQuestion + 1 }}/{{ questions.length }}.
          <span class="text-primary">{{ questions[currentQuestion].question }}</span>
        </p>
        <div v-if="questions[currentQuestion].codeSnippet">
          <pre v-highlightjs><code class="language-javascript">{{ questions[currentQuestion].codeSnippet }}</code></pre>

        </div>

        <div class="form-check" v-for="(option, optionIndex) in questions[currentQuestion].options" :key="optionIndex">
          <input class="form-check-input" type="radio" :id="'option' + currentQuestion + '-' + optionIndex"
            :name="'question' + currentQuestion" :value="option" v-model="userAnswers[currentQuestion]" />
          <label class="form-check-label" :for="'option' + currentQuestion + '-' + optionIndex">
            {{ option }}
          </label>
        </div>
        <div class="row">
          <div class="col-6">
            <button v-if="currentQuestion > 0" class="btn btn-primary mt-3" @click="previousQuestion">
              Previous
            </button>
          </div>
          <div class="col-6 text-end">
            <button @click="nextQuestion" class="btn btn-primary mt-3 next-button"
              :disabled="!userAnswers[currentQuestion]" v-if="currentQuestion < questions.length - 1">
              Next
            </button>
            <button v-if="currentQuestion === questions.length - 1" @click="submitQuiz" class="btn btn-success">
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="submitted" class="mt-4">
      <h3 class="text-center text-primary">Quiz Results</h3>
      <p class="text-center">
        <strong>Correct Answers:</strong> {{ correctAnswers }}
      </p>
      <p class="text-center">
        <strong>Incorrect Answers:</strong> {{ incorrectAnswers }}
      </p>
      <div v-for="(question, index) in questions" :key="index" class="mb-3 card">
        <p>
          <strong class="pe-3">{{ index + 1 }}: {{ question.question }}</strong>
          <font-awesome-icon :icon="['fas', 'check']" v-if="userAnswers[index] === question.correctAnswer"
            class="text-success" />
          <font-awesome-icon :icon="['fas', 'times']" v-else class="text-danger" />
        </p>
        <p>
          <span class="text-primary">Your answer:</span>
          {{ userAnswers[index] }}
        </p>
        <p>
          <span :class="{
            'text-success': userAnswers[index] === question.correctAnswer,
            'text-danger': userAnswers[index] !== question.correctAnswer,
          }">
            Correct answer:
          </span>
          {{ question.correctAnswer }}
        </p>
        <hr />
        <p class="text-secondary">{{ question.explanation }}</p>
      </div>
      <button @click="restartQuiz" class="btn btn-secondary">Restart Quiz</button>
    </div>
  </div>
</template>

<script >
import questions from "@/data/javascript.js";
export default {
  data() {
    return {
      allQuestions: [], // All available questions loaded from a JSON file or API
      questions: [],
      userAnswers: [],
      correctAnswers: 0,
      incorrectAnswers: 0,
      submitted: false,
      timeLeft: 0,
      timer: null,
      currentQuestion: 0,
      showInstructions: true,
    };
  },

  created() {
    this.allQuestions = questions;
  },
  computed: {
    minutes() {
      return Math.floor(this.timeLeft / 60);
    },
    seconds() {
      return this.timeLeft % 60;
    },
  },
  methods: {
    startQuiz() {
      this.selectRandomQuestions();
      this.startTimer();
      this.showInstructions = false;
    },
    selectRandomQuestions() {
      const shuffled = this.allQuestions.sort(() => 0.5 - Math.random());
      this.questions = shuffled.slice(0, 10); // or however many questions you want
      this.userAnswers = Array(this.questions.length).fill(null);
    },
    startTimer() {
      this.timeLeft = this.questions.length * 60; // for example, 60 seconds per question
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.submitQuiz();
        }
      }, 1000);
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
      }
    },
    previousQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },
    submitQuiz() {
      this.submitted = true;
      clearInterval(this.timer);
      this.evaluateAnswers();
    },
    evaluateAnswers() {
      this.questions.forEach((question, index) => {
        if (question.correctAnswer === this.userAnswers[index]) {
          this.correctAnswers++;
        } else {
          this.incorrectAnswers++;
        }
      });
    },
    restartQuiz() {
      this.submitted = false;
      this.currentQuestion = 0;
      this.userAnswers = [];
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
      this.timeLeft = this.questions.length * 60;
      this.startTimer();
    },
  },
};
</script>

<style scoped>
.quiz-container {
  margin: auto;
  text-align: left;
  border: 1px solid #dee2e6;
  border-radius: 5px;
}

.card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
}

.form-check-label {
  margin-left: 10px;
}

.form-check-input {
  cursor: pointer;
}

button {
  margin-top: 20px;
}

.timer {
  color: red;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 17px;
}

.quiz-heading {
  font-size: 20px;
  color: #343a40;
  margin-bottom: 20px;
}

.next-button {
  width: 100px;
}

@media (max-width: 767px) {
  .timer {
    display: block;
  }
}
</style>
