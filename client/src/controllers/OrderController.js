'use strict';

module.exports = (app) => {
    app.controller('OrderController', ['$scope', '$http', '$state', '$rootScope', '$interval', 'appConfig', 'spinnerService',
        ($scope, $http, $state, $rootScope, $interval, appConfig, spinnerService) => {
            const delay = 10000;
            let intervalPromise;

            const fetchOrder = (done) => {
                $rootScope.error = {
                    value: false,
                    message: ''
                };
                $http.get(`${appConfig.URL}/api/order/${$scope.orderId}`)
                    .then((response) => {
                        console.log('received order: ', response);
                        $scope.order = response.data._source;

                        if ($scope.inProgress === false) {
                            $interval.cancel(intervalPromise);
                        }

                    }, (error)=> {
                        console.log('errors: ', error);
                        $rootScope.error = {
                            value: true,
                            message: 'Error while fetching order!'
                        };

                    })
                    .finally(()=> {
                        if (done) {
                            done();
                        }
                    });
            };

            const checkForUpdates = ()=> {
                intervalPromise = $interval(fetchOrder, delay);
            };

            $scope.orderId = $state.params.orderId;

            if ($scope.orderId) {
                spinnerService.start();
                fetchOrder(spinnerService.stop);

                checkForUpdates();
            }

            $scope.chefImage = ()=> {
                return $scope.order.inProgress ? ['chef-cooking'] : ['chef-done-cooking'];
            }

        }]);
};