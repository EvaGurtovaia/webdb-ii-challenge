const db = require("./dbConfig.js");

module.exports = {
    get,
    getById,
    insert
};

function get() {
    return db("cars");
}
function getById(id) {
    let query = db("cars as c");
    query.where("c.id", id).first();
    return query.then(function(results) {
        return results;
    });
}

function insert(car) {
    return db("cars")
        .insert(car)
        .then(([id]) => this.getById(id));
}
