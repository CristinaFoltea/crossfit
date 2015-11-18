(function () {
  angular
      .module('app', ['ngRoute', 'angularMoment'])
      .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/views/articles.html',
        controller: 'MainController'
      })
      .when('/second', {
        templateUrl: '/app/views/second.html',
        controller: 'SecondController'
      })
      .otherwise({redirectTo:'/'});

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  };
}())
