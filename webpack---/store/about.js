export const state = () => ({
    isAboutUsTitleAnimate: false,
})

export const mutations = {
    setAboutUsTitleAnimate(state, payload) {
        state.isAboutUsTitleAnimate = payload
    }
}