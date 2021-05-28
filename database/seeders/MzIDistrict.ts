import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run () {
    const uniqueKey='name'

    const province = await Province.findByOrFail('code','MZ-I')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Funhalouro',
        provinceId:province.id
      },
      {
        name: 'Govuro',
        provinceId:province.id
      },
      {
        name: 'Homoíne',
        provinceId:province.id
      },
      {
        name: 'Inhambane',
        provinceId:province.id
      },
      {
        name: 'Inharrime',
        provinceId:province.id
      },
      {
        name: 'Inhassoro',
        provinceId:province.id
      },
      {
        name: 'Jangamo',
        provinceId:province.id
      },
      {
        name: 'Mabote',
        provinceId:province.id
      },
      {
        name: 'Massinga',
        provinceId:province.id
      },
      {
        name: 'Maxixe',
        provinceId:province.id
      },
      {
        name: 'Panda',
        provinceId:province.id
      },
      {
        name: 'Morrumbene',
        provinceId:province.id
      },
      {
        name: 'Vilanculos',
        provinceId:province.id
      },
      {
        name: 'Zavala',
        provinceId:province.id
      }
    ])
  }
}
