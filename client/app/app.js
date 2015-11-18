(function () {
  angular
      .module('app', ['ngRoute'])
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
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  };
}())
