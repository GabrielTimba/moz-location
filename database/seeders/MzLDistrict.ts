import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'name'

    const province = await Province.findByOrFail('code', 'MZ-L')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Boane',
        provinceId: province.id,
      },
      {
        name: 'Magude',
        provinceId: province.id,
      },
      {
        name: 'Manhiça',
        provinceId: province.id,
      },
      {
        name: 'Marracuene',
        provinceId: province.id,
      },
      {
        name: 'Matola',
        provinceId: province.id,
      },
      {
        name: 'Matutuíne',
        provinceId: province.id,
      },
      {
        name: 'Moamba',
        provinceId: province.id,
      },
      {
        name: 'Namaacha',
        provinceId: province.id,
      },
    ])
  }
}
