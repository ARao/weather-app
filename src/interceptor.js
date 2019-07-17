function onResponseError(error) {
    console.log("response error")
}

function onResponseNotOk(res) {
    if (typeof interceptor.responseNotOk === 'function') {
        interceptor.responseNotOkFunc(res.status, res.statusText, res.url);
    }
    interceptor.responseNotOkStatus = true;
    interceptor.status = res.status;
    interceptor.statusText = res.statusText;
    interceptor.url = res.url;
}

function onResponseOk(res) {
    interceptor.responseNotOkStatus = false;
    interceptor.status = undefined;
    interceptor.statusText = undefined;
    interceptor.url = undefined;
}


const originalFetch = fetch;


const newFetch = async (...options) => {
    try {
        const res = await originalFetch(...options)
        if (!res.ok) {
            onResponseNotOk(res)
        } else {
            onResponseOk()
        }
        return res
    } catch (err) {
        onResponseError(err)
        return Promise.reject(err)
    }
}

const interceptor = {
    register() {
        global.fetch = newFetch
    },
    unregister() {
        global.fetch = originalFetch
        interceptor.responseNotOkStatus = false
    },
    responseNotOkFunc: undefined,
    responseNotOkStatus: false,
    status: undefined,
    statusText: undefined,
    url: undefined

}


export default interceptor
