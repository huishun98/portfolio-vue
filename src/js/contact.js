import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      msg: ""
    };
  },
  methods: {
    send: function() {
      const payload = {
        name: this.name,
        email: this.email,
        message: this.msg
      };
      this.$emit('open-loader')
      axios
        .post(`https://hs-flask-mailer.herokuapp.com`, payload)
        .then(() => {
          this.$emit('done-loader', true)
        })
        .catch(e => {
          this.$emit('done-loader', false)
          console.log(e);
        });
    }
  }
};