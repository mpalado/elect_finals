<template>
    <div class="questionnaire">
      <header class="header">
        <img src="@/assets/brian.png" alt="M.I. Profiler Logo" class="logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About the Test</a></li>
            <li><a href="#">Results/Insights</a></li>
          </ul>
        </nav>
      </header>
  
      <div class="questions">
        <div
          v-for="(question, index) in questions"
          :key="index"
          class="question-item"
        >
          <p>{{ index + 1 }}. {{ question.text }}</p>
          <div class="options">
            <label v-for="(option, optionIndex) in options" :key="optionIndex">
              <input
                type="radio"
                :name="'question' + index"
                :value="option.value"
                v-model="answers[index]"
              />
              <span :class="option.color">{{ option.label }}</span>
            </label>
          </div>
        </div>
      </div>
  
      <router-link to="/fifth">
            <button class="start-test-button">Next</button>
          </router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [
          { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        ],
        options: [
          { label: "Strongly Agree", value: "strongly_agree", color: "green" },
          { label: "Agree", value: "agree", color: "light-green" },
          { label: "Neutral", value: "neutral", color: "gray" },
          { label: "Disagree", value: "disagree", color: "light-red" },
          { label: "Strongly Disagree", value: "strongly_disagree", color: "red" },
        ],
        answers: Array(6).fill(null), // To store user answers for each question
      };
    },
    methods: {
      submit() {
        console.log(this.answers); // Outputs answers for testing
        // Handle form submission
      },
    },
  };
  </script>
  
  <style scoped>
 .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #A786FF;
  padding: 15px 30px;
  color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 80px;
  margin-right: 15px;
  height: 20; /* maintain aspect ratio */
}

nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #A786FF;
}

/* Questionnaire styling */
.questions {
  padding: 20px;
  max-width: 800px;
  margin: 30px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.question-item {
  border-top: 1px solid #ddd;
  padding: 20px 0;
}

.question-text {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.options {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.options label {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin: 5px 10px;
}

.options input[type="radio"] {
  margin-right: 8px;
}

/* Option color classes */
.green {
  color: #28a745;
}

.light-green {
  color: #8bc34a;
}

.gray {
  color: #6c757d;
}

.light-red {
  color: #f44336;
}

.red {
  color: #dc3545;
}

/* Improved submit button styling */
.start-test-button {
  background-color: #A786FF;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  margin: 20px auto;
  display: block;
  max-width: 150px;
  transition: background-color 0.3s;
}

.start-test-button:hover {
  background-color: #A786FF;
}
   /* App Header Styles */
  /* .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  
  .logo h1 {
    font-size: 22px;
    font-weight: bold;
  }
  
  .nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }
  
  .nav a {
    text-decoration: none;
    font-weight: 500;
  } */
  </style>
