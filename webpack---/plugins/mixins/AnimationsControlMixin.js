export default {
    data: () => ({
        timelines: [],
        scrollTriggers: []
    }),
    beforeDestroy() {
        this.destroyAnimations()
    },
    methods: {
        destroyAnimations() {
            this.timelines.forEach((tl) => {
                if (tl.scrollTrigger) {
                    tl.scrollTrigger.kill()
                }
                tl.kill()
            })
            this.timelines.length = 0

            this.scrollTriggers.forEach((st) => {
                st.kill()
            })
            this.scrollTriggers.length = 0
        }
    }
}