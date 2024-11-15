<template>
    <div id="app">
      <!-- Header -->
      <header class="app-header">
        <img src="@/assets/brian.png" alt="MI Profiler Logo" class="logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/intro">About the Test</a></li>
            <li><a href="#results">Results/Insights</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        
        <section class="home-section">
  <!-- Additional Circles for Background -->
  <div class="circle circle1"></div>
  <div class="circle circle2"></div>
  <div class="circle circle3"></div>
  <div class="circle circle4"></div>
  <div class="circle circle5"></div>
  <div class="circle circle6"></div>
<!-- Congratulations Section -->
  <div class="congratulations">
    <h1>Congratulations on completing the test!</h1>
    <p>
      Thank you for taking the time to explore your multiple intelligences. Your results will provide valuable insights into your strengths and showcase where you can grow. We hope these findings guide you in discovering new hobbies and career paths that align with your unique abilities.
    </p>
    <span class="down-arrow">⬇</span>
  </div>
</section>

        
        
        <!-- Results & Insights Section -->
        <section class="results-insights">
          <h2>Results & Insights</h2>
          <div class="cards">
            <div class="card" v-for="(result, index) in results" :key="index">
              <h3>{{ result.title }}</h3>
              <p>{{ result.description }}</p>
            </div>
          </div>
          <div class="email-section">
            <p>Would you like a copy of your results?</p>
            <input type="email" placeholder="Enter your email" />
            <button>Send Results</button>
          </div>
        </section>
      </main>
      
      <footer>
        <div class="footer">
          <img src="@/assets/brian.png" alt="MI Profiler Logo" class="logo1" />
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        results: [
          { title: "Linguistic-Verbal", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus erat." },
          { title: "Logical-Mathematical", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus erat." },
          { title: "Bodily-Kinesthetic", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus erat." },
          { title: "Musical", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus erat." },
          { title: "Spatial", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus erat." },
          { title: "Interpersonal", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus erat." },
          { title: "Intrapersonal", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus erat." },
          { title: "Naturalistic", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus erat." }
        ]
      };
    }
  };
  </script>
  
  <style>
  /* Global Styling */
  #app {
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  /* Header */
  .app-header {
    background-color: #a4cf71;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  .app-header .logo {
    height: 40px;
  }
  .app-header nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .app-header nav ul li {
    margin-left: 20px;
  }
  .app-header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  margin-left: 20px;
  
  }

  .app-header nav ul li a:hover {
    color: #333; /* Dark gray on hover, or change to any color you prefer */
  }
  
  
/* Home Section */
.home-section {
  position: relative;
  padding: 250px 20px;
  background-color: #f4f4f4;
  text-align: center;
  overflow: hidden;
}

/* Congratulations Box Styling */
.congratulations {
  background: white;
  padding: 40px 30px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

.congratulations h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  font-weight: bold;
}

.congratulations p {
  color: #555;
  font-size: 16px;
  line-height: 1.5;
}

.down-arrow {
  display: block;
  margin-top: 20px;
  font-size: 24px;
  color: #555;
}

/* Slightly Darker Background Circles */
.home-section .circle {
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


  
  /* Results & Insights Section */
  .results-insights {
    text-align: center;
    padding: 20px;
  }
  .results-insights h2 {
    margin-bottom: 20px;
    color: #5a2ea6;
  }
  .cards {
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
  .card {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .card h3 {
    color: #5a2ea6;
  }
  .email-section {
    margin-top: 20px;
  }
  .email-section input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .email-section button {
    padding: 10px 20px;
    background-color: #5a2ea6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .email-section button:hover {
    background-color: #7c4dcc;
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
  