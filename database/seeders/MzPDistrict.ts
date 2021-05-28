import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'name'

    const province = await Province.findByOrFail('code', 'MZ-P')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Ancuabe',
        provinceId: province.id,
      },
      {
        name: 'Balama',
        provinceId: province.id,
      },
      {
        name: 'Ibo',
        provinceId: province.id,
      },
      {
        name: 'Macomia',
        provinceId: province.id,
      },
      {
        name: 'Mecúfi',
        provinceId: province.id,
      },
      {
        name: 'Meluco',
        provinceId: province.id,
      },
      {
        name: 'Metuge',
        provinceId: province.id,
      },
      {
        name: 'Mocímboa da Praia',
        provinceId: province.id,
      },
      {
        name: 'Montepuez',
        provinceId: province.id,
      },
      {
        name: 'Mueda',
        provinceId: province.id,
      },
      {
        name: 'Muidumbe',
        provinceId: province.id,
      },
      {
        name: 'Namuno',
        provinceId: province.id,
      },
      {
        name: 'Nangade',
        provinceId: province.id,
      },
      {
        name: 'Palma',
        provinceId: province.id,
      },
      {
        name: 'Pemba',
        provinceId: province.id,
      },
      {
        name: 'Quissanga',
        provinceId: province.id,
      },
    ])
  }
}
