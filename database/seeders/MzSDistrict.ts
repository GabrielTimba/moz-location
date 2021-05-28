import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run () {
    const uniqueKey='name'

    const province = await Province.findByOrFail('code','MZ-S')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Beira',
        provinceId:province.id
      },
      {
        name: 'Búzi',
        provinceId:province.id
      },
      {
        name: 'Caia',
        provinceId:province.id
      },
      {
        name: 'Chemba',
        provinceId:province.id
      },
      {
        name: 'Cheringoma',
        provinceId:province.id
      },
      {
        name: 'Chibabava',
        provinceId:province.id
      },
      {
        name: 'Dondo',
        provinceId:province.id
      },
      {
        name: 'Gorongosa',
        provinceId:province.id
      },
      {
        name: 'Machanga',
        provinceId:province.id
      },
      {
        name: 'Maringué',
        provinceId:province.id
      },
      {
        name: 'Maringué',
        provinceId:province.id
      },
      {
        name: 'Muanza',
        provinceId:province.id
      },
      {
        name: 'Nhamatanda',
        provinceId:province.id
      }
    ])
  }
}
