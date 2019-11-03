<template>
  <div class="contact container-fluid section">
    <h2 class="section-header">CONTACT ME</h2>
    <form class="section-width section-body" @submit.prevent="send">
      <div class="form-group">
        <label for="formGroupExampleInput">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="John Appleseed"
          v-model="name"
          required
        />
      </div>
      <label for="exampleFormControlInput1">Email address</label>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          placeholder="name@example.com"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea class="form-control" rows="5" v-model="msg" required></textarea>
      </div>
      <button type="submit" class="btn btn-outline-light">Send</button>
    </form>
  </div>
</template>

<script src="../js/contact.js"></script>

<style scoped src="../styles/contact.css"></style>
