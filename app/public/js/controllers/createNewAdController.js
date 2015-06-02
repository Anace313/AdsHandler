angular.module('adsHandlerApp')
    .controller('createNewAdController', ['$scope', '$rootScope', 'AdsService', '$location',
        function ($scope, $rootScope, AdsService, $location) {
            $scope.ad = {};
            $scope.ad.created = new Date();
            $scope.ad.impressions = Math.floor((Math.random() * 10000));
            $scope.ad.spend = Math.floor((Math.random() * 10000));
            $scope.ad._id = '';
            function randomString(length, chars) {
                var result = '';
                for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
                return result;
            }
            $scope.ad._id = randomString(24, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            $scope.create = function () {
                var ads = AdsService.createNew($scope.ad);
                ads.then(
                    function (res) {
                        $rootScope.$broadcast('UpdateAds');
                        $location.path('/#/')
                    },
                    function (err) {
                        console.log('failure creating ad', err);
                    });
            };
            $scope.cancel = function () {
                $rootScope.$broadcast('UpdateAds');
                $location.path('/#/')
            }
        }]);