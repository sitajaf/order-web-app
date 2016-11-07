const MainController = require('./MainController');
const OrderController = require('./OrderController');

module.exports = (app) => {
    MainController(app);
    OrderController(app);
};