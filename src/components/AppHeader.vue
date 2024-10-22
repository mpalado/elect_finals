<template>
  <header class="app-header">
    <div class="logo">
      <img src="@/assets/brian.png" alt="M.I. Profiler Logo" />
      <h1>M.I. Profiler</h1>
    </div>
    <nav class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About the Test</a></li>
        <li><a href="#">Results/Insights</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#" class="test-button">Take the Test</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.app-header {
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
  color: #333;
  font-weight: bold;
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.test-button {
  background-color: #00a7e1;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  transition: background-color 0.3s ease;
}

.test-button:hover {
  background-color: #008cbf;
}
</style>
