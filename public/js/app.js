(function () {

  var app = angular.module('poolersmx', [
  	'ngRoute',
    'poolersmx.directives',
    'poolersmx.controllers'
  ]);


  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/registeree/', {
        templateUrl: 'views/registeree.html'
      })
      
      .otherwise({
        redirectTo: '/'
      });

  }]);


})();
