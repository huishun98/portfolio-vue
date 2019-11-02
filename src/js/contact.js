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
      axios
        .post(`https://hs-flask-mailer.herokuapp.com`, payload)
        .then(() => {
          alert("Thank you for contacting me! I will reply shortly.");
        })
        .catch(e => {
          alert(
            `There's some error with the form. 
Please email me at huishun98@gmail.com. 
Sorry for the inconvenience caused.`
          );
          console.log(e);
        });
    }
  }
};