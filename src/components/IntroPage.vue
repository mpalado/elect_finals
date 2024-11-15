<template>
    <div>
      <!-- App Header -->
      <header class="app-header">
        <div class="logo">
          <img src="@/assets/brian.png" alt="M.I. Profiler Logo" />
          <h1>M.I. Profiler</h1>
        </div>
        <nav class="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/intro">About the Test</a></li>
            <li><a href="#">Results/Insights</a></li>
            <li><a href="#">Account</a></li>
            <router-link to="/" class="take-test-button">Take the Test</router-link>
          </ul>
        </nav>
      </header>
  
      <section class="intro-section">
        <div class="reminders">
          <h2>Reminders!</h2>
          <p>
            Before you begin the test, please note that it consists of 48 questions, with 6 questions dedicated
            to each of the 8 Multiple Intelligences. Your responses will help identify your strengths in these
            areas. To get the most accurate assessment, be honest with your answers and take your time, as there
            is no time limit. Once you complete the test, you’ll receive a score for each intelligence, along
            with personalized insights, such as suggested hobbies to improve weaker areas and potential career
            paths for the intelligences where you excel.
          </p>
          <p class="disclaimer">
            Please keep in mind that this is an informal self-assessment tool and not a professional diagnostic
            test.
          </p>
        </div>
    
        <div class="instructions-box">
          <h3>Instructions</h3>
          <p>
            To begin the Multiple Intelligences Test, carefully read each statement related to different types
            of intelligences, reflecting on your own preferences, experiences, and abilities. For each statement,
            indicate your level of agreement by selecting one of the following options: Strongly disagree,
            Disagree, Neutral, Agree, or Strongly agree. Be honest in your responses to ensure the most accurate
            assessment of your intelligences. It’s important to answer all questions to receive a comprehensive
            evaluation. Once you’ve completed the quiz, review your responses and submit your answers for scoring.
            After reviewing your results, take some time to reflect on your scores and the insights provided,
            which will help you understand your strengths and areas for development.
          </p>
          <router-link to="/first">
            <button class="start-test-button">Start the Test!</button>
          </router-link>
        </div>
      </section>
    </div> <!-- Add this closing tag -->
  </template>

  <script>
  export default {
    name: "IntroPage"
  };
  </script>
  
  <style scoped>
  .intro-section {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .reminders h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .reminders p {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 1.6;
  }
  
  .disclaimer {
    font-size: 14px;
    color: #555;
    font-style: italic;
  }
  
  .instructions-box {
    border: 1px solid #ddd;
    padding: 20px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .instructions-box h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .instructions-box p {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .start-test-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .start-test-button:hover {
    background-color: #0056b3;
  }

  /* App Header Styles */
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .take-test-button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #00a7e1;
    color: white;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
    cursor: pointer;
  }

  .app-header nav ul li a {
  color: black; /* Set link color to black */
  text-decoration: none;
  font-weight: bold;
  }
  
  .app-header nav ul li a:hover {
    color: #333; /* Dark gray on hover, or change to any color you prefer */
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
  }
  
  </style>
  