angular.module('adsHandlerApp')
    .controller('adsController', ['$scope', '$rootScope', 'AdsService', function ($scope, $rootScope, AdsService) {
        var getAds = function () {
            var ads = AdsService.getAllAds();
            ads.then(
                function (res) {
                    $scope.ads = res.data;
                },
                function (err) {
                    console.log('failure loading ads', err);
                });
        };
        getAds();
        $rootScope.$on('UpdateAds', function (event, data) {
            getAds();
        })

    }])


