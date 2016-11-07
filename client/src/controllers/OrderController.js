'use strict';

module.exports = (app) => {
    app.controller('OrderController', ['$scope', '$http', '$state', '$rootScope', 'appConfig',
        ($scope, $http, $state, $rootScope, appConfig) => {
            $scope.orderId = $state.params.orderId;
            if ($scope.orderId) {
                console.log('url: ', appConfig.URL);
                $http.get(`${appConfig.URL}/api/order/${$scope.orderId}`)
                    .then((response) => {
                        console.log('received order: ', response);
                        $scope.order = response.data._source;
                        // $scope.$apply();
                    }, (error)=> {
                        console.log('errors: ', error);
                        $rootScope.error = {
                            value: true,
                            message: 'Error while fetching order!'
                        };

                    });
            }

        }]);
};