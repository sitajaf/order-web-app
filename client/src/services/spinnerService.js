'use strict'

var template = require('../templates/services/spinner.html');

module.exports = (app) => {
    app.factory('spinnerService', ['$rootScope', '$uibModal', ($rootScope, $uibModal) => {

        var isRunning = false;

        return {
            start: () => {
                if (!isRunning) {
                    isRunning = true;
                    $rootScope.spinnerModal = $uibModal.open({
                        templateUrl: template,
                        animation: false,
                        backdrop: 'static',
                        keyboard: false
                    });
                }
            },
            stop: () => {
                if (isRunning) {
                    $rootScope.spinnerModal.close();
                    isRunning = false;
                }
            }
        };
    }]);

};