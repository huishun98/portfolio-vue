<template>
  <div id="app" class="body">
    <Banner />
    <Projects />
    <Contact @open-loader="openLoader" @done-loader="doneLoader"/>
    <Loader v-if="loader" :message="loaderMessage" :type="loaderType" @close="closeLoader" @done="closeLoader"/>
  </div>
</template>

<script src="./js/app.js"></script>

<style src="./styles/global.css"></style>
