const MainController = require('./MainController');
const NavbarController = require('./NavbarController');

module.exports = (app) => {
    MainController(app);
    NavbarController(app);
};