export const Constants = {
    COMPONENT_OPTIONS_KEY: "nuxtI18n",
    STRATEGIES: {
        "PREFIX": "prefix",
        "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
        "PREFIX_AND_DEFAULT": "prefix_and_default",
        "NO_PREFIX": "no_prefix"
    },
    REDIRECT_ON_OPTIONS: {
        "ALL": "all",
        "ROOT": "root",
        "NO_PREFIX": "no prefix"
    },
}
export const nuxtOptions = {
    isUniversalMode: true,
    trailingSlash: undefined,
}
export const options = {
    vueI18n: {
        "fallbackLocale": "en",
        "messages": {}
    },
    vueI18nLoader: false,
    locales: [{
        "code": "en",
        "name": "EN"
    }, {
        "code": "ua",
        "name": "UA"
    }],
    defaultLocale: "en",
    defaultDirection: "ltr",
    routesNameSeparator: "___",
    defaultLocaleRouteNameSuffix: "default",
    sortRoutes: true,
    strategy: "prefix_except_default",
    lazy: false,
    langDir: null,
    rootRedirect: null,
    detectBrowserLanguage: {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": null,
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
    },
    differentDomains: false,
    baseUrl: "",
    vuex: {
        "moduleName": "i18n",
        "syncRouteParams": true
    },
    parsePages: true,
    pages: {},
    skipSettingLocaleOnNavigate: false,
    onBeforeLanguageSwitch: () => {},
    onLanguageSwitched: () => null,
    normalizedLocales: [{
        "code": "en",
        "name": "EN"
    }, {
        "code": "ua",
        "name": "UA"
    }],
    localeCodes: ["en", "ua"],
    additionalMessages: [],
}

export const localeMessages = {}