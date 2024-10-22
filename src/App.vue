<template>
  <div id="app">
    <AppHeader />
    <HeroSection />
    <MultipleIntelligences />
    <AboutTest />
    <Resultsinsight />
    <Footer />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/IntroSection.vue';
import MultipleIntelligences from './components/MultipleIntelligences.vue';
import AboutTest from './components/AboutTest.vue';
import Resultsinsight from './components/ResultsSection.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    MultipleIntelligences,
    AboutTest,
    Resultsinsight,
    Footer,
  },
};
</script>

<style>
/* Add global styling if necessary */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  background-color: #f9f9f9;
}
</style>
