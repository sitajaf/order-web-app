const mainPageTemplate = require('./src/templates/main.html');

const controllers = require('./src/controllers');
const services = require('./src/services');
const constants = require('./src/constants');

var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap'
]);

constants(app);
controllers(app);
services(app);

app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.when('', '/main');
    $urlRouterProvider.when('/', '/main');
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/main',
        templateUrl: mainPageTemplate,
        controller: 'MainController'
    })
});

app.run(['$rootScope', '$state',
    ($rootScope, $state) => {
        //handle login stuff here
    }
]);

module.exports = app;