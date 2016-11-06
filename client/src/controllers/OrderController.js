'use strict';

module.exports = (app) => {
    app.controller('OrderController', ['$scope', '$http', '$state', 'appConfig', ($scope, $http, $state, appConfig) => {
        $http.get(`${appConfig.URL}/order/${$state.params.orderNumber}`)
            .then((order) => {
                console.log('orders: ', $scope.order);
                $scope.$apply();
            }, (error)=> {
                console.log('errors: ', error)
            });
    }]);
};