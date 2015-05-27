'use strict';

angular.module('adsHandlerApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/views/ads.html',
                controller: 'adsController'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/views/about.html'
            })
            .state('edit', {
                url: '/edit/{id}',
                templateUrl: '/views/editAd.html',
                controller: 'editAdController'
            })
            .state('create', {
                url: '/create',
                templateUrl: '/views/createNewAd.html',
                controller: 'createNewAdController'
            });
    });