'use strict';

module.exports = (app) => {
    let config = null;
    try {
        config = require('../../config.json');
    } catch (err) {
        console.log('No Config file located!!');
    }

    app.constant('appConfig', {
        URL: config === null ? `http://localhost:3000` : `${config.server.url}`
    });
};