// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res, next) => {
    Project.findProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Project.postProjects(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(next)
})

module.exports = router;