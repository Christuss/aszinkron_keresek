class DataService {
    constructor() {

    }
    getData(vegpont, callback, hibaCallback) {
        axios.get(vegpont)
            .then(function (response) {
                // handle success
                console.log("response",response);
                console.log("data",response.data);
                console.log('státusz', response.status);
                console.log('text', response.statusText);
                callback(response.data.nevek)
            })
            .catch(function (error) {
                // handle error
                hibaCallback(error)
            })
            .finally(function () {
                // always executed
            });
    }
}

export default DataService;