const router = require('express').Router();
const ElasticSearchService = require('../services/elasticService');

const elasticSearchService = new ElasticSearchService();

router.get('/order/:orderNumber', (req, res) => {
    res.status(200).send({
        orderNumber: req.params.orderNumber || 'DEF0123',
        name: 'Kawunga'
    });
});

router.post('/order', (req, res) => {
    const order = req.body;
    const isValid = valid(order);
    if (isValid) {
        elasticSearchService.add('order', order)
            .then((response)=> {
                return res.status(201).send('Order Saved!');
            }, (error)=> {
                console.log('Error while saving order: ', error);
                return res.status(500).send({message: 'Error while saving Order!'})
            });
    } else {
        return res.status(400).send({message: 'Invalid Order!'})
    }
});

const valid = (order) => {
    return order !== undefined && order !== {};
};

module.exports = router;