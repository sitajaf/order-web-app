'use strict';

module.exports = (app) => {
    let config = null;
    try {
        config = require('../../client_config.json');
    } catch (err) {
        console.log('No Config file located!! Using default settings ...');
    }

    console.log('config: ', config);

    app.constant('appConfig', {
        URL: config === null ? `http://localhost:3000` : `${config.server.host}`
    });
};