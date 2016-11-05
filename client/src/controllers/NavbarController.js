'use strict';

module.exports = (app) => {
    app.controller('NavbarController', ['$rootScope', '$state',
        ($rootScope, $state) => {
            $rootScope.signOut = () => {
                //sign out
               $state.go('main');
            };

        }]);
};