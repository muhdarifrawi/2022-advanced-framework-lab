const knex = require("knex")({
    client:"mysql",
    connection:{
        user:{"ENV":"DB_USER"},
        password:{"ENV":"DB_PASSWORD"},
        database:{"ENV":"DB_DATABASE"}
    }
})

const bookshelf = require("bookshelf")(knex)

module.exports = bookshelf