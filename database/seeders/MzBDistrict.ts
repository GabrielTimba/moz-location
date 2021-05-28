import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'name'

    const province = await Province.findByOrFail('code', 'MZ-B')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Bárue',
        provinceId: province.id,
      },
      {
        name: 'Chimoio',
        provinceId: province.id,
      },
      {
        name: 'Gondola',
        provinceId: province.id,
      },
      {
        name: 'Guro',
        provinceId: province.id,
      },
      {
        name: 'Macate',
        provinceId: province.id,
      },
      {
        name: 'Macate',
        provinceId: province.id,
      },
      {
        name: 'Macossa',
        provinceId: province.id,
      },
      {
        name: 'Macossa',
        provinceId: province.id,
      },
      {
        name: 'Mossurize',
        provinceId: province.id,
      },
      {
        name: 'Sussundenga',
        provinceId: province.id,
      },
      {
        name: 'Tambara',
        provinceId: province.id,
      },
      {
        name: 'Vanduzi',
        provinceId: province.id,
      },
    ])
  }
}
