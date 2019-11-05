export default {
    name: "Loader",
    props: ['message', 'type'],
    methods: {
        done() {
            this.$emit('done')
        }
    }
};