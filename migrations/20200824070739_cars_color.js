
exports.up = async function(knex) {
  await knex.schema.alterTable("cars", (tables) => {
      tables.text("color")
  })
};

exports.down = async function(knex) {
    await knex.schema.alterTable("cars", (tables) => {
        tables.dropColumn("color")
    })
};
