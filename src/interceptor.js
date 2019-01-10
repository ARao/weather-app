import fetchIntercept from 'fetch-intercept';
 
const unregister = fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        return [url, config];
    },
 
    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },
 
    response: function (response) {
        // Modify the reponse object
        return response;
    },
 
    responseError: function (error) {
        error.text().then( errorMessage => {
            console.log(errorMessage)
          })
        return Promise.reject(error);
    }
});

export default unregister;