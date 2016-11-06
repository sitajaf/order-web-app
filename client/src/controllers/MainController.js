'use strict';

module.exports = (app) => {
    app.controller('MainController', ['$scope', '$http', 'appConfig', ($scope, $http, appConfig) => {
        $scope.data = {value: 'Hello!'};
        $http.get(`${appConfig.URL}/order/334839`)
            .then((order) => {
                console.log('orders: ', order)
            }, (error)=> {
                console.log('errors: ', error)
            });
    }]);
};