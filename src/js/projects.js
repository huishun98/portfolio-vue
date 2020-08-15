export default {
    name: "Projects",
    data() {
        return {
            collapsed: {
                narie: false
            }
        }
    },
    methods: {
        toggle(ref) {
            this.collapsed[ref] = !this.collapsed[ref]
        }
    }
};