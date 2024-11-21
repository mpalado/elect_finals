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
            <router-link to="/intro" class="take-test-button">Take the Test</router-link>
          </ul>
        </nav>
      </header>
      
  
      <!-- Intro Section -->
      <section class="intro-section">
        <div class="intro-content">
          <h1>Explore your intelligence, unlock your potential!</h1>
          <router-link to="/intro">
            <button class="discover-button">Discover Now!</button>
          </router-link>
        </div>
        <div class="background-graphics">
          <img src="@/assets/brain-image.gif" alt="Brain Diagram" />
        </div>
        <div class="circle circle1"></div>
  <div class="circle circle2"></div>
  <div class="circle circle3"></div>
  <div class="circle circle4"></div>
  <div class="circle circle5"></div>
  <div class="circle circle6"></div>
      </section>
  
      <!-- Multiple Intelligences Section -->
      <section class="intelligence-section">
        <h2>What are Multiple Intelligences?</h2>
        <p class="description">
          Multiple Intelligences is a groundbreaking theory proposed by psychologist Howard Gardner in 1983. Gardner’s theory identifies eight distinct types of intelligences, each representing a unique way of processing information and demonstrating skills.
        </p>
        <div class="intelligence-list">
          <div v-for="intelligence in intelligences" :key="intelligence.name" class="intelligence-card">
            <h3>{{ intelligence.name }}</h3>
            <p>{{ intelligence.description }}</p>
          </div>
        </div>
      </section>
      
      <!-- About Test Section -->
      <section class="about-test-section">
        <h2>About the Test</h2>
        <p>
          This test is designed to provide you with insights into your dominant intelligences through a simple and engaging questionnaire. It consists of 10 questions for each type of intelligence, allowing you to explore your strengths.
        </p>
        <p>
          Please note that this test is not an official assessment; rather, it serves as a fun and informal tool to help you understand your unique abilities. By answering the questions honestly, you’ll receive a personalized score for each intelligence, along with insights into potential hobbies and career paths that align with your strengths.
        </p>
      </section>
  
      <!-- Results and Insights Section -->
    <section class="results-insight-section">
      <div class="results">
        <h2>Results</h2>
        <p>
          Upon completing the test, you will receive a detailed score breakdown for
          each of the eight intelligences, presented as percentages. This section
          will help you understand your strengths and weaknesses in various areas,
          providing a clear picture of your unique intelligence profile.
        </p>
      </div>
      <div class="image-container">
        <img src="@/assets/brains.png" alt="Brain Image" />
      </div>
      <div class="insights">
        <h2>Insight</h2>
        <p>
          This section offers tailored recommendations based on your scores. Here,
          you'll find suggestions for hobbies to help develop your lesser
          intelligences and potential career paths that align with your strongest
          traits. Use these insights to guide your personal growth and explore new
          opportunities!
        </p>
      </div>
    </section>
  
      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-left">
            <img src="@/assets/brian.png" alt="M.I. Profiler Logo" class="logo1" />
          </div>
          <div class="divider"></div>
          <div class="footer-right">
            <nav>
              <!-- <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About the Test</a></li>
                <li><a href="#">Test</a></li>
                <li><a href="#">Results/Insights</a></li>
                <li><a href="#">Account</a></li>
              </ul> -->
            </nav>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "CombinedComponents",
    data() {
      return {
        intelligences: [
          { name: 'Linguistic-Verbal', description: 'The ability to use language effectively, whether through speaking, writing, or reading.' },
          { name: 'Logical-Mathematical', description: 'The capacity for logical reasoning, problem-solving, and understanding complex mathematical concepts.' },
          { name: 'Bodily-Kinesthetic', description: 'The ability to use one’s body skillfully for expression or to solve problems.' },
          { name: 'Musical', description: 'The sensitivity to rhythm, pitch, and melody, allowing individuals to appreciate and create music.' },
          { name: 'Spatial', description: 'The ability to visualize and manipulate objects in space.' },
          { name: 'Interpersonal', description: 'The ability to understand and interact effectively with others.' },
          { name: 'Naturalistic', description: 'The ability to recognize and categorize plants, animals, and other aspects of the natural environment.' },
          { name: 'Intrapersonal', description: 'The capacity for self-awareness and self-reflection, understanding one’s emotions and motivations.' }
        ]
      };
    },
    methods: {
      goToTest() {
        this.$router.push('/test');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Shared Styles */
  h1, h2 {
    color: #333;
  }
  
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
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
  .app-header nav ul li a {
  color: black; /* Set link color to black */
  text-decoration: none;
  font-weight: bold;
  margin-left: 20px;
  
  }
  
  .app-header nav ul li a:hover {
    color: #333; /* Dark gray on hover, or change to any color you prefer */
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

/* Optional: Add a hover effect */
.take-test-button:hover {
    background-color: #008fb5; /* Darker shade for hover effect */
    color: white;
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
  
  /* Intro Section */
  .intro-section {
    position: relative;
    padding: 100px 20px;
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: flex-end; /* Align content to the right side */
    overflow: hidden; /* Ensure circles stay within bounds */
    margin-bottom: 50px; /* Add spacing below this section */
    
  }
  
  .intro-content {
    max-width: 500px;
    margin-right: 300px;
    position: relative; /* Relative positioning gives it a higher stacking context */
    
    z-index: 1; /* Content will be on top */
  }
  
  .discover-button {
    padding: 15px 30px;
    font-size: 18px;
    background-color: #00a7e1;
    color: white;
    border-radius: 25px;
  }

  .background-graphics {
    height: 700px;
    display: flex; /* Allows alignment of the image */
    justify-content: flex-end; /* Pushes the image to the right */
    align-items: center; /* Vertically centers the image */
    padding-right: 20px; /* Add space between the image and the container edge */
}
  
  .background-graphics img {
    position: relative;
    left: 0%;
    width: 100%;
    max-width: 900px;
    opacity: 1;
    margin-right: 0;
    z-index: 1; /* Ensures the image is above other elements */
  }

  /* Slightly Darker Background Circles */
 .circle {
  position: absolute;
  border-radius: 100%;
  opacity: 1; /* Full opacity for a stronger effect */
  z-index: 0;
}

/* Circle Styles */
.circle1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #FFB4AA, transparent);
  top: -100px;
  left: -150px;
}

.circle2 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #B6E29C, transparent);
  top: 150px;
  right: -120px;
}

.circle3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #FFE08A, transparent);
  bottom: -50px;
  left: -100px;
}

.circle4 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, #A0D5FF, transparent);
  bottom: 100px;
  right: 50px;
}

.circle5 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #FFA2CA, transparent);
  top: 250px;
  left: 200px;
}

.circle6 {
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, #8FD5E3, transparent);
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
}
  
  /* About Test Section */
  .about-test-section {
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;
    margin-bottom: 350px; /* Add spacing below this section */
  }
  
  /* Multiple Intelligences Section */
  .intelligence-section {
    padding: 3rem 5%;
    margin-bottom: 350px; /* Add spacing below this section */
  }
  
  .intelligence-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .intelligence-card {
    padding: 1.5rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Results and Insights Section */
  .results-insight-section {
    display: flex;
    justify-content: space-between;
    padding: 3rem 5%;
    margin-bottom: 300px; /* Add spacing below this section */
  }
  
  .results, .insights {
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-right: 2rem;
  }
  
  .insights {
    margin-right: 0;
    background-color: #DA4453;
    color: white;
  }
  
  /* Footer */
  .footer {
    background-color: #ffffff;
    padding: 20px 0;
    color: white;
    border-top: 2px solid #000000; /* Change color and thickness as needed */
    margin: 20px 0; /* Space above and below the line */

  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
  }
  
  .footer-right nav ul {
    list-style-type: none;
    display: flex;
    gap: 30px;
  
  }
  .logo1 {
  width: 10%; /* or a specific width, e.g., 300px */
  height: -50; /* maintain aspect ratio */
  }


  </style>
  