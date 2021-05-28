import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Region from './Region'
import District from './District'

export default class Province extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public capital: string

  @column()
  public code: string

  @column({ serializeAs: null })
  public regionId: number

  @belongsTo(() => Region)
  public region: BelongsTo<typeof Region>

  @hasMany(() => District)
  public districts: HasMany<typeof District>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
