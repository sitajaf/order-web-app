const MainController = require('./MainController');
const NavbarController = require('./NavbarController');
const OrderController = require('./OrderController');

module.exports = (app) => {
    MainController(app);
    NavbarController(app);
    OrderController(app);
};