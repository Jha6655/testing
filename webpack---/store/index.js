/* eslint-disable */

// state

export const state = () => ({
    isPreloaderVisible: true,
    isPreloaderComplete: false,
    isLoaderComplete: false,
    isMute: true,
    isFaqOpened: false,
    isNightMode: false,
    isTV: true,
    iframe: null,
    data: {
        main: {
            url: '/api/main?populate=deep',
            data: null
        },
        about: {
            url: '/api/about?populate=deep',
            data: null
        },
        contacts: {
            url: '/api/contact?populate=deep',
            data: null
        },
        faq: {
            url: '/api/faq?populate=deep',
            data: null
        },
        privacy_policy: {
            url: '/api/privacy-policy?populate=deep',
            data: null
        },
        terms_and_conditions: {
            url: '/api/term-of-use?populate=deep',
            data: null
        },
        projects: {
            url: '/api/projects?populate=deep',
            data: null
        },
        error: {
            url: '/api/error-page?populate=deep',
            data: null
        }
    }
})

// mutations

export const mutations = {
    setIframe(state, payload) {
        state.iframe = payload
    },
    closeIframe(state) {
        state.iframe = null
    },
    setPreloaderVisibility(state, payload) {
        state.isPreloaderVisible = payload
        state.isPreloaderComplete = payload
    },
    hidePreloader(state) {
        state.isPreloaderComplete = true
    },
    toggleSound(state) {
        state.isMute = !state.isMute
    },
    turnOffSound(state, payload) {
        state.isMute = payload
    },
    openFaqPopup(state) {
        state.isFaqOpened = true
    },
    closeFaqPopup(state) {
        state.isFaqOpened = false
    },
    toggleFaqPopup(state) {
        state.isFaqOpened = !state.isFaqOpened
    },
    setLoaderComplete(state, payload) {
        state.isLoaderComplete = payload
    },
    setNightMode(state, payload) {
        state.isNightMode = payload
    },
    toggleNightMode(state) {
        state.isNightMode = !state.isNightMode
    },
    setTV(state, payload) {
        state.isTV = payload
    },

    setData(state, payload) {
        const {
            type,
            data
        } = payload
        state.data[type].data = data
    }
}

// actions

export const actions = {
    async nuxtServerInit({
        commit,
        dispatch,
        state
    }, {
        $axios
    }) {
        await dispatch('fetchData', {
            type: 'faq',
        })
        await dispatch('fetchData', {
            type: 'projects',
        })
        await dispatch('fetchData', {
            type: 'error',
        })
        await dispatch('fetchData', {
            type: 'main',
        })
    },
    async fetchData({
        commit,
        state
    }, payload) {
        const {
            type
        } = payload

        if (state.data[type].data === undefined) return
        const {
            data,
            meta
        } = await this.$axios.$get(state.data[type].url)

        commit('setData', {
            data,
            type,
        })
    }
}

// getters

export const getters = {
    main_page(state) {
        const data = state.data.main.data.attributes
        const meta = data.Meta
        return {
            description_1: data.Main_phrase,
            description_2: data.Description,
            end_phrases: data.end_phrase.map(el => el.add_phrase),
            projects_title: data.Projects_title,
            projects_description: data.Projects_description,
            wheel_title: data.Down_title,
            wheel_description: data.Down_Description,
            labels: data.add_point.map(el => el.Point),
            meta: {
                title: meta.metaTitle,
                description: meta.metaDescription,
                keywords: meta.keywords || '',
                og: {
                    image: meta ? .metaImage ? .data ? .attributes ? .url
                }
            }
        }
    },
    contacts_page(state) {
        const data = state.data.contacts.data.attributes
        const meta = data.Meta
        return {
            title: data.Work_title,
            description: data.Description,
            email: data.Work_mail,
            socials: data.Social_link.map((el, index) => ({
                id: index,
                name: el.Social_name,
                link: el.Social_link
            }))
        }
    },
    faq(state) {
        const data = state.data.faq.data.attributes
        return {
            qas: data.FAQ_block.map(el => ({
                title: el.Question,
                text: el.Answer,
                id: el.id
            }))
        }
    },
    about(state) {
        const data = state.data.about.data.attributes
        return {
            title_1: data.Title,
            title_2: data.Title2,
            label_1: data.Point1,
            label_2: data.Point2,
            label_3: data.Point3,
            description_1: data.Description,
            description_2: data.Description_opacity,
            title_down_1: data.Down_title,
            title_down_2: data.Down_title2,
            features: data.add_Feature.map(item => ({
                id: item.id,
                description: item.Feature_number,
                title: item.Feature_text,
            }))
        }
    },
    privacy_policy(state) {
        const data = state.data.privacy_policy.data.attributes
        return {
            content: data.Text_field
        }
    },
    terms_and_conditions(state) {
        const data = state.data.terms_and_conditions.data.attributes
        return {
            content: data.Text_field
        }
    },
    projects(state) {
        const data = state.data.projects.data
        return data.map(el => ({
            id: el.id,
            name: el.attributes.Name,
            link: el.attributes.Link_Project,
            photo: el.attributes.Photo.data ? .attributes ? .url,
            file: el.attributes.PDF_file.data ? .attributes ? .url,
            position: el.attributes.Position,
            iframe: el.attributes.iframe_video
        })).sort((a, b) => a.position - b.position)
    },
    error(state) {
        const data = state.data.error.data.attributes
        return {
            title_1: data.Title1,
            title_2: data.Title2,
            title_3: data.Title3
        }
    }
}