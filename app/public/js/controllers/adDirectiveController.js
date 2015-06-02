angular.module('adsHandlerApp')
    .controller('adDirectiveController', ['$scope', '$rootScope', 'AdsService', '$location',
        function ($scope, $rootScope, AdsService, $location) {
            $scope.adData = JSON.parse($scope.ad);
            $scope.rem = function (id) {
                AdsService.removeAd(id).then(
                    function () {
                        $rootScope.$broadcast('UpdateAds');
                    }
                )
            };
            $scope.edit = function (id) {
                $location.path('/edit/' + id);
            }

        }]);