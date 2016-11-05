'use strict';

module.exports = (app) => {
    app.controller('MainController', ['$scope', '$http', ($scope, $http) => {
        $scope.data = {value: 'Hello!'};
        $http.get('http://localhost:3000/order')
            .then((orders) =>{
               console.log('orders: ', orders)
            },(error)=>{
                console.log('errors: ', error)
            });
    }]);
};