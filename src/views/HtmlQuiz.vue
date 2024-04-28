<template>
  <div class="container mt-5">
    <div v-if="showInstructions" class="card text-center p-0">
      <div class="card-header"><strong>Welcome to the HTML Quiz!</strong></div>
      <div class="card-body">
        <h5 class="card-title text-primary" >Quiz Instructions</h5>
        <p class="card-text">
          Get ready to test your knowledge with our interactive HTML quiz.
          Please read the instructions carefully before you begin.
        </p>
        <ul class="text-start">
          <li>
            The quiz consists of {{ questions.length }} questions covering
            various aspects of HTML.
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
      <h2 class="mb-4">HTML Quiz</h2>
      <div v-if="currentQuestion < questions.length" class="card p-3 mb-3">
        <p class="card-title">
          Q{{ currentQuestion + 1 }}.
          <span class="text-primary">{{
            questions[currentQuestion].question
          }}</span>
        </p>
        <p class="timer">Time Remaining: {{ minutes }}:{{ seconds }}</p>
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
        <button
          @click="nextQuestion"
          class="btn btn-primary mt-3"
          :disabled="!userAnswers[currentQuestion]"
          v-if="currentQuestion < questions.length - 1"
        >
          Next
        </button>
      </div>
      <div v-if="currentQuestion === questions.length - 1">
        <button @click="submitQuiz" class="btn btn-success">Submit Quiz</button>
      </div>
    </div>
    <div v-else-if="submitted" class="mt-4">
      <h2>Quiz Results</h2>
      <div
        v-for="(question, index) in questions"
        :key="index"
        class="mb-3 card"
      >
        <p>
          <strong>Q{{ index + 1 }}: {{ question.question }}</strong>
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
      <p><strong>Correct Answers:</strong> {{ correctAnswers }}</p>
      <p><strong>Incorrect Answers:</strong> {{ incorrectAnswers }}</p>
      <button @click="restartQuiz" class="btn btn-secondary">
        Restart Quiz
      </button>
    </div>
  </div>
</template>

<script>
import questions from "@/data/html.json";
export default {
  data() {
    return {
      showInstructions: true,
      questions: questions, // This will be populated with the JSON object of questions
      userAnswers: Array(questions.length).fill(null),
      correctAnswers: 0,
      incorrectAnswers: 0,
      submitted: false,
      timeLeft: 1200, // 20 minutes in seconds
      timer: null,
      currentQuestion: 0,
    };
  },
  created() {
    //this.questions = this.getQuestions(); // Assuming getQuestions() is a method that returns the JSON object of questions
    this.startTimer();
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
    getQuestions() {
      // Return your JSON object of 20 questions here
      // For demonstration, I'll return a dummy question
      return [
        {
          question: "What is the purpose of the alt attribute in an <img> tag?",
          options: [
            "To provide a text description of the image if it cannot be displayed.",
            "To alternate the image source if the original source fails.",
            "To specify alternative styles for the image.",
            "To provide an alternate URL for the image.",
          ],
          correctAnswer:
            "To provide a text description of the image if it cannot be displayed.",
          explanation:
            "The alt attribute provides a text alternative for the image if it cannot be displayed, which is useful for accessibility.",
        },
        {
          question: "What does the for attribute in a <label> element specify?",
          options: [
            "The form data that should be sent when submitting the form.",
            "The ID of the form element the label is bound to.",
            "The name of the form the label belongs to.",
            "The encoding type of the form data.",
          ],
          correctAnswer: "The ID of the form element the label is bound to.",
          explanation:
            "The for attribute associates the label with an input element by matching the input's ID.",
        },
        {
          question:
            "How do you ensure that a group of radio buttons allows only one selection at a time?",
          options: [
            "Give each input a unique name attribute.",
            "Give each input the same value attribute.",
            "Give each input the same type attribute.",
            "Give each input the same name attribute.",
          ],
          correctAnswer: "Give each input the same name attribute.",
          explanation:
            "Giving each radio button in a group the same name attribute ensures that only one can be selected at any time.",
        },
        {
          question: "In CSS, which selector has the highest specificity?",
          options: [
            "Element selector (e.g., h1)",
            "Class selector (e.g., .menu)",
            "ID selector (e.g., #header)",
            "Inline style",
          ],
          correctAnswer: "Inline style",
          explanation:
            "Inline styles have the highest specificity compared to selectors in external or internal stylesheets.",
        },
        {
          question:
            "What is the default behavior of a form when the submit button is clicked?",
          options: [
            "The form data is saved locally.",
            "The form is cleared of all data.",
            "The form data is sent to the server.",
            "The form checks for empty required fields.",
          ],
          correctAnswer: "The form data is sent to the server.",
          explanation:
            "By default, when a submit button in a form is clicked, the form data is sent to the server specified in the form’s action attribute.",
        },
        {
          question:
            "Which HTML attribute is used to define the maximum number of characters allowed in an <input> field?",
          options: ["max", "maxlength", "length", "size"],
          correctAnswer: "maxlength",
          explanation:
            "The maxlength attribute specifies the maximum number of characters allowed in an input field.",
        },
        {
          question: "Which HTML tag is used to create a drop-down list?",
          options: [
            '<input type="dropdown">',
            "<list>",
            "<select>",
            "<option>",
          ],
          correctAnswer: "<select>",
          explanation: "The <select> tag is used to create a drop-down list.",
        },
        {
          question: "How can you make a text input field read-only?",
          options: [
            '<input type="text" readonly>',
            '<input type="text" disabled>',
            '<input type="text" locked="true">',
            '<input type="text" editable="false">',
          ],
          correctAnswer: '<input type="text" readonly>',
          explanation:
            "The readonly attribute makes the <input> field unmodifiable, although the user can still focus and copy text from it.",
        },
        {
          question:
            'What does the target="_blank" attribute in an anchor tag do?',
          options: [
            "Opens the linked document in a new window or tab.",
            "Downloads the linked document.",
            "Opens the linked document in the same frame.",
            "Specifies that the linked document should be shown in full-screen.",
          ],
          correctAnswer: "Opens the linked document in a new window or tab.",
          explanation:
            'The target="_blank" attribute in an anchor tag specifies that the link should open in a new window or tab.',
        },
      ];
    },
    startQuiz() {
      this.showInstructions = false;
    },
    startTimer() {
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
  background-color: #f8f9fa;
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
  margin-left: 5px;
  margin-top: 7px;
}

.form-check-input {
  margin-top: 10px;
  margin-left: 0;
  cursor: pointer;
}

button {
  margin-top: 20px;
}

.timer {
  position: absolute;
  right: 15px;
  top: 15px;
  color: red;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 5px;
}

@media (max-width: 767px) {
  .timer {
    top: 5px;
    right: 5px;
    font-size: 12px;
  }
}
.card-title {
  font-size: 18px;
  font-weight: 700;
}
</style>
