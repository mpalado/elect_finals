<template>
    <section class="results-insight-section">
      <div class="results">
        <h2>Results</h2>
        <p>Upon completing the test, you will receive a detailed score breakdown for each of the eight intelligences.</p>
      </div>
      <div class="insights">
        <h2>Insight</h2>
        <p>This section offers tailored recommendations based on your scores, helping you explore career paths or hobbies aligned with your strengths.</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ResultsInsights',
  };
  </script>
  
  <style scoped>
  .results-insight-section {
    display: flex;
    justify-content: space-between;
    padding: 3rem 5%;
  }
  
  .results, .insights {
    flex: 1;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-right: 2rem;
  }
  
  .results h2, .insights h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .results p, .insights p {
    font-size: 1.1rem;
    color: #555;
  }
  
  .insights {
    margin-right: 0;
    background-color: #4B1E9E;
  }
  .insights h2, .insights p {
    color: white;
  }
  </style>
  