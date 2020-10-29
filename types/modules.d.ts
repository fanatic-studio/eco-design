declare type app = {
    config: {
        params: Object,
        env: WXEnvironment,
    };
    requireModule: (name: string) => Object | void;
    supports: (condition: string) => boolean | void;
    isRegisteredModule: (moduleName: string, methodName: string) => boolean;
    isRegisteredComponent: (componentName: string) => boolean;
}

declare type WXEnvironment = {
    platform: string
    weexVersion: string
    appName: string
    appVersion: string
    osVersion: string
    deviceModel?: string
    deviceWidth: number
    deviceHeight: number
}

declare type eco = {
    adDialog: (params:object|string, callback:(result:object) => {}) => void;
    adDialogClose: (dialogName:string) => void;

    ajax: (params:object, callback:(result:object) => {}) => void;
    ajaxCancel: (name:string) => void;
    getCacheSizeAjax: (callback:(result:object) => {}) => void;
    clearCacheAjax: () => void;

    alert: (params:object, callback:(result:object) => {}) => void;
    confirm: (params:object, callback:(result:object) => {}) => void;
    input: (params:object, callback:(result:object) => {}) => void;

    getCacheSizeDir: (callback:(result:object) => {}) => void;
    clearCacheDir: (callback:(result:object) => {}) => void;
    getCacheSizeFiles: (callback:(result:object) => {}) => void;
    clearCacheFiles: (callback:(result:object) => {}) => void;
    getCacheSizeDbs: (callback:(result:object) => {}) => void;
    clearCacheDbs: (callback:(result:object) => {}) => void;

    swipeCaptcha: (imgUrl:string, callback:(result:object) => {}) => void;

    keyboardHide: () => void;
    keyboardStatus: () => boolean;

    loading: (params:object, callback:() => {}) => string;
    loadingClose: (loaddingName?:string) => void;

    openPage: (params:object, callback?:(result:object) => {}) => void;
    getPageInfo: (params?:object) => object;
    getPageInfoAsync: (params:object, callback:(result:object) => {}) => void;
    reloadPage: (params?:object) => void;
    setSoftInputMode: (params:object, mode:string) => void;
    setPageBackPressed: (params:object, callback:() => {}) => void;
    setOnRefreshListener: (params:object, callback:(pageName:string) => {}) => void;
    setRefreshing: (params:object, refreshing:boolean) => void;
    setStatusBarStyle: (isLight:boolean) => void;
    setPageStatusListener: (params:object, callback:(result:object) => {}) => void;
    clearPageStatusListener: (params:object) => void;
    onPageStatusListener: (params:object, status:string) => void;
    getCacheSizePage: (callback:(result:object) => {}) => void;
    clearCachePage: () => void;
    closePage: (params?:object) => void;
    closePageTo: (params:object) => void;
    openWeb: (url:string) => void;
    goDesktop: () => void;
    getConfigString: (key:string) => string;
    setCustomConfig: (key:string, val:string) => void;
    getCustomConfig: () => object;
    clearCustomConfig: () => void;
    realUrl: (url:string) => void;
    rewriteUrl: (url:string) => void;

    openOtherApp: (type:string) => void;
    openOtherAppTo: (pkg:string, cls:string, callback:(result:object) => {}) => void;

    copyText: (str:string) => void;
    pasteText: () => string;

    saveImage: (url:string, callback:(result:object) => {}) => void;
    saveImageTo: (url:string, childDir:string, callback:(result:object) => {}) => void;

    getImageSize: (url:string, callback:(result:object) => {}) => void;

    openScaner: (params:object, callback:(result:object) => {}) => void;

    shareText: (text:string) => void;
    shareImage: (imgUrl:string) => void;

    setCaches: (key:string, value:object, expired:number) => void;
    getCaches: (key:string, defaultVal:object) => object;
    setCachesString: (key:string, value:string, expired:number) => void;
    getCachesString: (key:string, defaultVal:string) => string;
    getAllCaches: () => object[];
    clearAllCaches: () => void;
    setVariate: (key:string, value:string) => void;
    getVariate: (key:string, defaultVal:string) => string;
    getAllVariate: () => object[];
    clearAllVariate: () => void;

    getStatusBarHeight: () => number;
    getStatusBarHeightPx: () => number;
    getNavigationBarHeight: () => number;
    getNavigationBarHeightPx: () => number;
    compareVersion: (version1:string, version2:string) => number;
    getImei: () => string;
    getImeiAsync: (callback:(result:object) => {}) => void;
    getIfa: () => string;
    getIfaAsync: (callback:(result:object) => {}) => void;
    isIPhoneXType: () => boolean;

    toast: (params:object) => void;
    toastClose: () => void;

    getVersion: () => number;
    getVersionName: () => string;
    getLocalVersion: () => number;
    getLocalVersionName: () => string;
    getSDKVersionCode: () => number;
    getSDKVersionName: () => string;
    getUpdateId: () => number;
    checkUpdate: () => void;
}

declare type navigationBar = {
    setTitle: (params:object, callback:(result:object) => {}) => void;
    setLeftItem: (params:object, callback:(result:object) => {}) => void;
    setRightItem: (params:object, callback:(result:object) => {}) => void;
    show: () => void;
    hide: () => void;
}

declare type navigator = {
    push: (params:object, callback:(result:object) => {}) => void;
    pop: (params:object, callback:(result:object) => {}) => void;
}

declare type animation = {
    transition: (ref:dom, params:object, callback:(result:object) => {}) => void;
}

declare type clipboard = {
    setString: (text:string) => void;
    getString: (callback:(data:string) => {}) => void;
}

declare type dom = {
    scrollToElement: (ref:dom, params:object) => void;
    getComponentRect: (ref:dom, callback:(result:object) => {}) => void;
    getLayoutDirection: (ref:dom, callback:(result:object) => {}) => void;
    addRule: (ref:dom, params:object) => void;
}

declare type globalEvent = {
    addEventListener: (eventName:string, callback:(e:object) => {}) => void;
    removeEventListener: (eventName:string) => void;
}

declare type meta = {
    setViewport: (params:object) => void;
}

declare type modal = {
    toast: (params:object) => void;
    alert: (params:object, callback:(result:object) => {}) => void;
    confirm: (params:object, callback:(result:object) => {}) => void;
    prompt: (params:object, callback:(result:object) => {}) => void;
}

declare type picker = {
    pick: (params:object, callback:(result:object) => {}) => void;
    pickDate: (params:object, callback:(result:object) => {}) => void;
    pickTime: (params:object, callback:(result:object) => {}) => void;
}

declare type storage = {
    setItem: (key:string, value:string, callback:(result:object) => {}) => void;
    getItem: (key:string, callback:(result:object) => {}) => void;
    removeItem: (key:string, callback:(result:object) => {}) => void;
    length: (callback:(result:object) => {}) => void;
    getAllKeys: (callback:(result:object) => {}) => void;
}

declare type stream = {
    fetch: (params:object, callback:(result:object) => {}, progressCallback:(result:object) => {}) => void;
}

declare type webView = {
    goBack: (webRef:dom) => void;
    goForward: (webRef:dom) => void;
    reload: (webRef:dom) => void;
}