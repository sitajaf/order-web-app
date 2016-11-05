'use strict';

const template = require('../templates/services/modal.html');

module.exports = (app) => {
    app.service('modalService', ['$uibModal', '$rootScope', ($uibModal, $rootScope) => {
        return {
            showModal: function (options) {
                $rootScope.confirmModal = $uibModal.open({
                    templateUrl: template,
                    animation: options.animate,
                    backdrop: options.backdrop,
                    controller: function ($scope, $rootScope) {
                        $scope.showCancel = options.showCancel;
                        $scope.headerText = options.headerText || "Are you sure?";
                        $scope.bodyText = options.bodyText || "Do you really want to delete this record?";
                        $scope.actionButtonText = options.actionButtonText || "Delete";
                        $scope.closeButtonText = options.closeButtonText || "Cancel";
                        
                        $scope.ok = function (result) {
                            $rootScope.confirmModal.close(result);
                        };
                        $scope.close = function (result) {
                            $rootScope.confirmModal.dismiss('cancel');
                        };
                    }
                });

                return $rootScope.confirmModal.result;
            }
        };
    }]);
}