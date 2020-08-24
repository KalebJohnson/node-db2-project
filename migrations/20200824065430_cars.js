
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      table.text("VIN").notNull().unique()
      table.integer("mileage").notNull()
      table.text("model").notNull()
      table.text("make").notNull()
      table.text("transmission").defaultTo(null)
      table.text("engine").defaultTo(null)
      table.text("title").defaultTo(null)
    })
  }
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
  }