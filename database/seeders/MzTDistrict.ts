import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'name'

    const province = await Province.findByOrFail('code', 'MZ-T')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Angónia',
        provinceId: province.id,
      },
      {
        name: 'Cahora-Bassa',
        provinceId: province.id,
      },
      {
        name: 'Changara',
        provinceId: province.id,
      },
      {
        name: 'Chifunde',
        provinceId: province.id,
      },
      {
        name: 'Chiuta',
        provinceId: province.id,
      },
      {
        name: 'Dôa',
        provinceId: province.id,
      },
      {
        name: 'Macanga',
        provinceId: province.id,
      },
      {
        name: 'Magoé',
        provinceId: province.id,
      },
      {
        name: 'Marara',
        provinceId: province.id,
      },
      {
        name: 'Marara',
        provinceId: province.id,
      },
      {
        name: 'Moatize',
        provinceId: province.id,
      },
      {
        name: 'Mutarara',
        provinceId: province.id,
      },
      {
        name: 'Tete',
        provinceId: province.id,
      },
      {
        name: 'Tsangano',
        provinceId: province.id,
      },
      {
        name: 'Zumbo',
        provinceId: province.id,
      },
    ])
  }
}
