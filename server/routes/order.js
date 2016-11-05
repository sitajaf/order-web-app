const router = require('express').Router();

router.get('/order', (req, res) => {
    res.send({
        id: 2344,
        name: 'Kawunga'
    })
});

module.exports = router;