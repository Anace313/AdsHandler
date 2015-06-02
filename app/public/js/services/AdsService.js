angular.module('adsHandlerApp')
    .service('AdsService', ['$http', function ($http) {
        this.getAllAds = function () {
            return $http.get('http://localhost:4000/api/ads/')
        };
        this.getAdbyId = function (id) {
            return $http.get('http://localhost:4000/api/ads/' + id);
        };
        this.removeAd = function (id) {
            return $http.delete('http://localhost:4000/api/ads/' + id);
        };
        this.updateAd = function (id, newData) {
            return $http.put('http://localhost:4000/api/ads/' + id, newData);
        };
        this.createNew = function (newAd) {
            return $http.post('http://localhost:4000/api/ads/', newAd);
        };
    }]);