angular.module('adsHandlerApp')
    .controller('adsController', ['$scope', '$rootScope', 'AdsService', '$location',
        function ($scope, $rootScope, AdsService, $location) {
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
            });
            $scope.create = function () {
                $location.path('/create')
            }
        }]);


