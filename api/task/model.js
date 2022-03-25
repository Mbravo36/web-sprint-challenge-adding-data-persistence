// build your `Task` model here
const db = require('../../data/dbConfig');

function findResources() {
    return db('projects')
}
function postResources(resources) {
    return db('resources')
    .insert(resources)
}
module.exports = {
    findResources,
    postResources
}