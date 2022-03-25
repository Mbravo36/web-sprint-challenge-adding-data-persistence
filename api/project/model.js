// build your `Project` model here
const db = require('../../data/dbConfig');

function findProjects() {
    return db('projects')
}
function postProjects(projects) {
    return db('projects')
    .insert(projects)
}

module.exports = {
    findProjects,
    postProjects
}