export default {
    name: "Footer",
    methods: {
        year: function() {
            const today = new Date();
            return today.getFullYear()
        }
    }
};