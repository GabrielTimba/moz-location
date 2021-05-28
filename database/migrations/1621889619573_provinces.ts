import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Provinces extends BaseSchema {
  protected tableName = 'provinces'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('capital').notNullable()
      table.string('code').notNullable()
      table.integer('region_id')
        .unsigned()
        .references('regions.id')
        .notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
