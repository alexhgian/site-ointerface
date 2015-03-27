'use strict';

/**
 * @ngdoc function
 * @name rajAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rajAppApp
 */
angular.module('rajAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
