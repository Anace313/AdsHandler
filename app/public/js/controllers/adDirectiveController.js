angular.module('adsHandlerApp')
    .controller('adDirectiveController', ['$scope', '$rootScope', 'AdsService', function ($scope, $rootScope, AdsService) {
        $scope.adData = JSON.parse($scope.ad);
        $scope.rem = function (id) {
            console.log('delete' + id)
            AdsService.removeAd(id).then(
                function () {
                    $rootScope.$broadcast('UpdateAds');
                }
            )
        }

    }]);