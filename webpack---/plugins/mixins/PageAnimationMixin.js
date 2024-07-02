export default {
    beforeMount() {
        document.querySelector('#scroller').scrollTo(0, 0)
    },
    beforeDestroy() {
        this.$st.getAll().forEach(st => st.kill())
    },
    transition: {
        leave(el, done) {

            // close faq popup
            this.$store.commit('closeFaqPopup')

            const loader = document.querySelector('.loader')
            const loaderInner = loader.querySelector('.loader__inner')
            this.$gsap.timeline({
                    onComplete: () => {
                        loaderInner._lottie && loaderInner._lottie.play()
                        this.$store.commit('setLoaderComplete', false)
                        done()
                    }
                })
                .set(loader, {
                    display: 'block',
                })
        },
        enter(el, done) {
            // window.scrollTo(0,0)
            document.querySelector('#scroller').scrollTo(0, 0)
            const loader = document.querySelector('.loader')
            const loaderInner = loader.querySelector('.loader__inner')
            this.$gsap.timeline({
                onComplete: () => {
                    loaderInner._lottie && loaderInner._lottie.stop()
                    this.$store.commit('setLoaderComplete', true)
                    done()
                }
            }).set(loader, {
                delay: 1,
                display: 'none',
            })
        }
    },
}