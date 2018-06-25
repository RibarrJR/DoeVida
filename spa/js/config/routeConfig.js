App.config(function($routeProvider){
    $routeProvider.when("/profile", {
        templateUrl:"../../view/layouts/profile.html",
        controller:"homeCtrl"
    });
    $routeProvider.when("/banks", {
        templateUrl:"../../view/layouts/banks.html",
        controller:"homeCtrl"
    });
    $routeProvider.when("/control-panel", {
        templateUrl:"../../view/layouts/control-panel.html",
        controller:"homeCtrl"
    });
    $routeProvider.when("/info", {
        templateUrl:"../../view/layouts/info.html",
        controller:"homeCtrl"
    });
    $routeProvider.otherwise({
        redirectTo:"/profile"
    });
});