import Banner from "../components/Banner.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Loader from "../components/Loader.vue";

export default {
    name: "app",
    components: {
        Banner,
        Projects,
        Contact,
        Loader
    },
    data() {
        return {
            loader: false,
            loaderMessage: "",
            loaderType: ""
        };
    },
    methods: {
        openLoader() {
            document.documentElement.style.overflow = 'hidden';
            this.loader = true;
            this.loaderMessage = "This might take a while. Please be patient.";
            this.loaderType = 'loading';
        },
        doneLoader(successful) {
            this.loaderType = 'done'
            if (successful) {
                this.loaderMessage = "I will reply shortly."
            } else {
                this.loaderMessage = `There's some error with the form. 
Please email me at huishun98@gmail.com. 
Sorry for the inconvenience caused.`
            }
        },
        closeLoader() {
            document.documentElement.style.overflow = 'auto';
            this.loader = false
        }
    }
};