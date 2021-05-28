import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'name'

    const province = await Province.findByOrFail('code', 'MZ-Q')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Alto Molócue',
        provinceId: province.id,
      },
      {
        name: 'Chinde',
        provinceId: province.id,
      },
      {
        name: 'Derre',
        provinceId: province.id,
      },
      {
        name: 'Gilé',
        provinceId: province.id,
      },
      {
        name: 'Gurué',
        provinceId: province.id,
      },
      {
        name: 'Ile',
        provinceId: province.id,
      },
      {
        name: 'Inhassunge',
        provinceId: province.id,
      },
      {
        name: 'Luabo',
        provinceId: province.id,
      },
      {
        name: 'Lugela',
        provinceId: province.id,
      },
      {
        name: 'Maganja da Costa',
        provinceId: province.id,
      },
      {
        name: 'Milange',
        provinceId: province.id,
      },
      {
        name: 'Milange',
        provinceId: province.id,
      },
      {
        name: 'Mocubela',
        provinceId: province.id,
      },
      {
        name: 'Molumbo',
        provinceId: province.id,
      },
      {
        name: 'Mopeia',
        provinceId: province.id,
      },
      {
        name: 'Morrumbala',
        provinceId: province.id,
      },
      {
        name: 'Mulevala',
        provinceId: province.id,
      },
      {
        name: 'Namacurra',
        provinceId: province.id,
      },
      {
        name: 'Namarroi',
        provinceId: province.id,
      },
      {
        name: 'Nicoadala',
        provinceId: province.id,
      },
      {
        name: 'Pebane',
        provinceId: province.id,
      },
      {
        name: 'Quelimane',
        provinceId: province.id,
      },
    ])
  }
}
