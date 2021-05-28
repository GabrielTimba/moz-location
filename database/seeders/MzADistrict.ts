import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'name'

    const province = await Province.findByOrFail('code', 'MZ-A')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Chimbonila',
        provinceId: province.id,
      },
      {
        name: 'Cuamba',
        provinceId: province.id,
      },
      {
        name: 'Lago',
        provinceId: province.id,
      },
      {
        name: 'Lichinga',
        provinceId: province.id,
      },
      {
        name: 'Majune',
        provinceId: province.id,
      },
      {
        name: 'Mandimba',
        provinceId: province.id,
      },
      {
        name: 'Marrupa',
        provinceId: province.id,
      },
      {
        name: 'Maúa',
        provinceId: province.id,
      },
      {
        name: 'Mavago',
        provinceId: province.id,
      },
      {
        name: 'Mecanhelas',
        provinceId: province.id,
      },
      {
        name: 'Mecula',
        provinceId: province.id,
      },
      {
        name: 'Metarica',
        provinceId: province.id,
      },
      {
        name: 'Muembe',
        provinceId: province.id,
      },
      {
        name: 'Ngauma',
        provinceId: province.id,
      },
      {
        name: 'Nipepe',
        provinceId: province.id,
      },
      {
        name: 'Sanga',
        provinceId: province.id,
      },
    ])
  }
}
