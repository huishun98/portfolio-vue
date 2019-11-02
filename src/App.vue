<template>
  <div id="app" class="body">
    <Banner />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "app",
  components: {
    Banner,
    Projects,
    Contact
  }
};
</script>

<style src="./styles/global.css"></style>
