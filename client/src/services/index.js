const spinnerService = require('./spinnerService');
const modalService = require('./ModalService');

module.exports = (app) => {
    spinnerService(app);
    modalService(app);
};