<template>
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
  </template>
  
  <script>
  export default {
    name: 'MultipleIntelligences',
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
  };
  </script>
  
  <style scoped>
  .intelligence-section {
    padding: 3rem 5%;
    background-color: #fff;
    text-align: center;
  }
  
  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .description {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 2rem;
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
  
  .intelligence-card h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .intelligence-card p {
    font-size: 1rem;
    color: #555;
  }
  </style>
  