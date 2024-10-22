<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-left">
          <img src="@/assets/brain1.png" alt="M.I. Profiler Logo" class="logo" />
        </div>
        <div class="divider"></div>
        <div class="footer-right">
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About the Test</a></li>
              <li><a href="#">Test</a></li>
              <li><a href="#">Results/Insights</a></li>
              <li><a href="#">Account</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #4B1E9E; /* Purple color */
    padding: 20px 0;
    color: white;
    font-family: Arial, sans-serif;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
  }
  
  .footer-left {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 80px;
    /* Adjust width to match the size of the logo in the image */
  }
  
  .divider {
    width: 1px;
    height: 40px;
    background-color: white;
    margin: 0 30px;
  }
  
  .footer-right nav ul {
    list-style-type: none;
    display: flex;
    gap: 30px;
  }
  
  .footer-right nav ul li {
    font-size: 16px;
  }
  
  .footer-right nav ul li a {
    color: white;
    text-decoration: none;
  }
  
  .footer-right nav ul li a:hover {
    text-decoration: underline;
  }
  </style>
  