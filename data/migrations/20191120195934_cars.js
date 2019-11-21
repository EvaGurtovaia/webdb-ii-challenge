exports.up = function(knex, Promise) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();
        tbl.string("VIN")
            .notNullable()
            .unique();
        tbl.integer("make").notNullable();
        tbl.string("model").notNullable();
        tbl.decimal("mileage").notNullable();
        tbl.enu("transmissionType", ["manual", "auto"]).nullable();
        tbl.enu("statusOfTheTitle", [
            "clean",
            "salvage",
            "junk",
            "bonded"
        ]).nullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("cars");
};
