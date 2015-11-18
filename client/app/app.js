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
      .otherwise({redirectTo:'/'});

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  };
}())
