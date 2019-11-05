<template>
  <div class="loader">
    <div class="loader-modal">
      <div class="card-body">
        <h5 v-show="type == 'loading'" class="card-title">Sending...</h5>
        <h5 v-show="type == 'done'" class="card-title">Thank you for your message</h5>
        <p class="card-text">{{message}}</p>
        <b-spinner v-show="type == 'loading'" variant="warning" label="Spinning"></b-spinner>
        <button @click="done" class="btn btn-outline-light">Close</button>
      </div>
    </div>
  </div>
</template>

<script src="../js/loader.js"></script>

<style scoped src="../styles/loader.css"></style>
