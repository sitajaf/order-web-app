'use strict';

module.exports = (app) => {
    let config = null;
    try {
        config = require('../../config.json');
    } catch (err) {
        console.log('No Config file located!!');
    }

    console.log('config: ', config);

    app.constant('appConfig', {
        URL: config === null ? `http://localhost:3000` : `http://localhost:${config.server.port}`
    });
};