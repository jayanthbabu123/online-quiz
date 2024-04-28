<template>
  <div class="container mt-5">
    <div v-if="showInstructions" class="card text-center p-0">
      <div class="card-header">
        <strong>Welcome to the HTML and CSS Quiz!</strong>
      </div>
      <div class="card-body">
        <h5 class="card-title text-primary">Quiz Instructions</h5>
        <p class="card-text">
          Get ready to test your knowledge with our interactive HTML and CSS
          quiz. Please read the instructions carefully before you begin.
        </p>
        <ul class="text-start">
          <li>
            The quiz consists of 10 questions covering various aspects of HTML
            and CSS.
          </li>
          <li>
            You must select one option for each question to proceed to the next
            one.
          </li>
          <li>
            You will not be able to go back to a previous question once you move
            forward.
          </li>
          <li>
            Results and detailed explanations will be shown after the quiz is
            completed.
          </li>
        </ul>
        <button type="button" class="btn btn-primary" @click="startQuiz">
          Start Quiz
        </button>
      </div>
      <div class="card-footer text-muted">Good luck!</div>
    </div>
  </div>
  <div class="container quiz-container mt-5">
    <div v-if="!submitted && !showInstructions">
      <div class="row">
        <div class="col-4 mt-2 total-questions">
          <strong
            >Total Questions:
            <span class="text-primary">{{ questions.length }}</span></strong
          >
        </div>
        <div class="col-4 mt-2 total-questions-mobile">
          <strong
            >Questions:
            <span class="text-primary">{{ questions.length }}</span></strong
          >
        </div>
        <div class="col-4 mt-2">
          <div class="mb-4 text-center quiz-heading  text-success">
            <strong> HTML Quiz </strong>
          </div>
        </div>
        <div class="col-4 text-end">
          <p class="timer">Time Remaining: {{ minutes }}:{{ seconds }}</p>
          <p class="timer-mobile">
             {{ minutes }}:{{ seconds }}
          </p>
        </div>
      </div>
      <div v-if="currentQuestion < questions.length" class="card p-3 mb-3">
        <p class="card-title">
          Q{{ currentQuestion + 1 }}.
          <span class="text-primary">{{
            questions[currentQuestion].question
          }}</span>
        </p>

        <div
          class="form-check"
          v-for="(option, optionIndex) in questions[currentQuestion].options"
          :key="optionIndex"
        >
          <input
            class="form-check-input"
            type="radio"
            :id="'option' + currentQuestion + '-' + optionIndex"
            :name="'question' + currentQuestion"
            :value="option"
            v-model="userAnswers[currentQuestion]"
          />
          <label
            class="form-check-label"
            :for="'option' + currentQuestion + '-' + optionIndex"
            >{{ option }}</label
          >
        </div>
        <div class="row">
          <div class="col-6">
            <button
              v-if="currentQuestion > 0"
              class="btn btn-primary mt-3"
              @click="previousQuestion"
            >
              Previous
            </button>
          </div>
          <div class="col-6 text-end">
            <button
              @click="nextQuestion"
              class="btn btn-primary mt-3 next-button"
              :disabled="!userAnswers[currentQuestion]"
              v-if="currentQuestion < questions.length - 1"
            >
              Next
            </button>
            <div v-if="currentQuestion === questions.length - 1">
              <button @click="submitQuiz" class="btn btn-success">
                Submit Quiz
              </button>
            </div>
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
      <div
        v-for="(question, index) in questions"
        :key="index"
        class="mb-3 card"
      >
        <p>
          <strong class="pe-3">{{ index + 1 }}: {{ question.question }}</strong>
          <font-awesome-icon
            :icon="['fas', 'check']"
            v-if="userAnswers[index] === question.correctAnswer"
            class="text-success"
          />
          <font-awesome-icon
            :icon="['fas', 'times']"
            v-else
            class="text-danger"
          />
        </p>
        <p>
          <span class="text-primary">Your answer:</span>
          {{ userAnswers[index] }}
        </p>
        <p>
          <span
            :class="{
              'text-success': userAnswers[index] === question.correctAnswer,
              'text-danger': userAnswers[index] !== question.correctAnswer,
            }"
            >Correct answer:
          </span>
          {{ question.correctAnswer }}
        </p>
        <hr />
        <p class="text-secondary">{{ question.explanation }}</p>
      </div>

      <button @click="restartQuiz" class="btn btn-secondary">
        Restart Quiz
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allQuestions: [], // All available questions, loaded from JSON
      questions: [], // To hold the randomly selected questions
      userAnswers: [],
      correctAnswers: 0,
      incorrectAnswers: 0,
      submitted: false,
      timeLeft: 0, // Timer to be set based on number of questions
      timer: null,
      currentQuestion: 0,
      showInstructions: true, // Initially show instructions
    };
  },
  created() {
    import("@/data/html.json").then((module) => {
      this.allQuestions = module.default;
    });
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
      this.showInstructions = false; // Hide instructions and start the quiz
    },
    selectRandomQuestions() {
      const shuffled = this.allQuestions.sort(() => 0.5 - Math.random());
      this.questions = shuffled.slice(0, 10); // Select 10 random questions
      this.userAnswers = Array(this.questions.length).fill(null);
    },
    startTimer() {
      this.timeLeft = this.questions.length * 60; // 60 seconds per question
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
      this.userAnswers = [];
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
      this.timeLeft = 1200;
      this.currentQuestion = 0;
      this.startTimer();
    },
  },
};
</script>

<style scoped>
.quiz-container {
  margin: auto;
  border: 1px solid #dee2e6;
  padding: 20px;
  border-radius: 5px;
  text-align: left;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #343a40;
}

.card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
}

.form-check-label {
  margin-left: 10px;
  margin-top: 9px;
}

.form-check-input {
  margin-top: 10px;
  margin-left: 0;
  cursor: pointer;
}

button {
  margin-top: 20px;
}

.timer, .timer-mobile {
  color: red;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 17px;
}

@media (max-width: 767px) {
  .timer {
    display: none;
  }
  .timer-mobile {
    display: block;
  }
  .total-questions{
    display: none;
  }

  .total-questions-mobile{ 
    display: block;
  }
}
@media screen and (min-width: 768px) {
  .timer-mobile {
    display: none;
  }
  .timer{
    display: block;
  }

  .total-questions{
    display: block;
  }

  .total-questions-mobile{ 
    display: none;
  }
  
}
.card-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
}
.next-button {
  width: 100px;
}
.form-check {
  background: #f7f7f7;
  display: block;
  min-height: 1.5rem;
  padding: 7px;
  padding-left: 30px;
  padding-bottom: 14px;
  margin-bottom: 0.5rem;
  border-radius: 5px;
}

.total-questions, .quiz-heading {
  font-size: 17px;
}
.form-check-input {
  height: 1.3em;
  width: 1.3em;
  cursor: pointer;
}
</style>
