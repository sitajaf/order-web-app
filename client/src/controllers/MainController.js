'use strict';

module.exports = (app) => {
    app.controller('MainController', ['$scope', '$http', 'appConfig', ($scope, $http, appConfig) => {
        $scope.data = {value: 'Hello!'};
    }]);
};