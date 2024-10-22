<template>
  <section class="intro-section">
    <div class="intro-content">
      <h1>Explore your intelligence, unlock your potential!</h1>
      <button class="discover-button">Discover Now!</button>
    </div>
    <div class="background-graphics">
      <img src="@/assets/brain-image.gif" alt="Brain Diagram" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroSection',
};
</script>

<style scoped>
.intro-section {
  position: relative;
  text-align: center;
  padding: px 20px;
  background-color: #f4f4f4;
  overflow: hidden;
}

.intro-content {
  z-index: 1;
  position: relative;
}

h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

.discover-button {
  padding: 15px 30px;
  font-size: 18px;
  background-color: #00a7e1;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.discover-button:hover {
  background-color: #008cbf;
}

.background-graphics {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.background-graphics img {
  width: 80%;
  max-width: 500px;
  opacity: 0.1;
}

.background-graphics:before {
  content: '';
  position: absolute;
  top: -100px;
  left: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,192,203,0.3), transparent);
}

.background-graphics:after {
  content: '';
  position: absolute;
  bottom: -100px;
  right: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(173,216,230,0.3), transparent);

}
.intro-section {
  position: relative;
  text-align: left; /* Change from center to left */
  padding: 150px 20px;
  background-color: #f4f4f4;
  overflow: hidden;
  display: flex;          /* Use flexbox */
  justify-content: flex-start; /* Aligns the content to the left */
  align-items: center;    /* Vertically centers the content */
}

.intro-content {
  z-index: 1;
  position: relative;
  max-width: 500px; /* Set a max width for better spacing control */
  margin-left: 20px; /* Adjust this value for left padding/spacing */
}

h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

.discover-button {
  padding: 15px 30px;
  font-size: 18px;
  background-color: #00a7e1;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.discover-button:hover {
  background-color: #008cbf;
}

.background-graphics {
  position: absolute;
  top: 0;
  left: 110%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.background-graphics img {
  width: 80%;
  max-width: 500px;
  opacity: 1;
}

.background-graphics:before {
  content: '';
  position: absolute;
  top: -100px;
  left: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,192,203,0.3), transparent);
}

.background-graphics:after {
  content: '';
  position: absolute;
  bottom: -100px;
  right: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(173,216,230,0.3), transparent);
}



</style>
