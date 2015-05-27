angular.module('adsHandlerApp')
    .controller('editAdController', ['$scope', '$rootScope', 'AdsService', '$stateParams', '$location',
        function ($scope, $rootScope, AdsService, $stateParams, $location) {
            var getAd = function () {
                var ads = AdsService.getAdbyId($stateParams.id);
                ads.then(
                    function (res) {
                        $scope.ad = res.data;
                    },
                    function (err) {
                        console.log('failure loading ads', err);
                    });
            };
            getAd();

            $scope.editAd = function () {
                var ads = AdsService.updateAd($scope.ad._id, $scope.ad);
                ads.then(
                    function (res) {
                        $rootScope.$broadcast('UpdateAds');
                        $location.path('/#/')
                    },
                    function (err) {
                        console.log('failure loading ads', err);
                    });
            };

            $scope.cancel = function () {
                $rootScope.$broadcast('UpdateAds');
                $location.path('/#/')
            }

        }])