'use strict';

module.exports = (app) => {
    app.controller('MainController', ['$scope', '$http', 'appConfig', ($scope, $http, appConfig) => {
        $scope.data = {value: 'Hello!'};
        $http.get(`${appConfig.URL}/order`)
            .then((orders) => {
                console.log('orders: ', orders)
            }, (error)=> {
                console.log('errors: ', error)
            });
    }]);
};