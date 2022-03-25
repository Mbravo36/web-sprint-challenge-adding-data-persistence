// build your `/api/resources` router here
const router = require('express').Router();
const Resources = require('./model');

router.get('/', (req, res, next) => {
    Resources.findResources()
    .then(resources => {
        res.json(resources)
    })
    .catch(next)
})
router.post('/', (req, res, next) => {
    Resources.postResources(req.body)
    .then(newResources => {
        res.status(201).json(newResources)
    })
    .catch(next)
})
module.exports = router;