const router = require('express').Router();
const ElasticSearchService = require('../services/elasticService');

const elasticSearchService = new ElasticSearchService();

router.get('/api/order/:id', (req, res) => {
    if (req.params.id) {
        elasticSearchService.get('order', req.params.id)
            .then((order)=> {
                res.status(200).send(order);
            }, (error)=> {
                res.status(500).send(error);
            })
    }else{
        res.status(400).send({message: 'Invalid id!'});
    }


});

router.post('/api/order', (req, res) => {
    const order = req.body;
    const isValid = valid(order);
    if (isValid) {
        order.inProgress = true;
        elasticSearchService.add('order', order)
            .then((response)=> {
                return res.status(201).send({id: response._id});
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