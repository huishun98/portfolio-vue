<template>
  <div class="contact container-fluid section">
    <h2 class="section-header">CONTACT ME</h2>
    <form class="section-width">
      <div class="form-group">
        <label for="formGroupExampleInput">Name</label>
        <input type="text" class="form-control" placeholder="John Appleseed" />
      </div>
      <label for="exampleFormControlInput1">Email address</label>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="name@example.com" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea class="form-control" rows="5"></textarea>
      </div>
      <button type="submit" class="btn btn-outline-light">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped src="../styles/contact.css"></style>
