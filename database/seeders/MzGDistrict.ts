import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run () {
    const uniqueKey='name'

    const province = await Province.findByOrFail('code','MZ-G')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Bilene',
        provinceId:province.id
      },
      {
        name: 'Bilene',
        provinceId:province.id
      },
      {
        name: 'Chicualacuala',
        provinceId:province.id
      },
      {
        name: 'Chigubo',
        provinceId:province.id
      },
      {
        name: 'Chókwè',
        provinceId:province.id
      },
      {
        name: 'Chongoene',
        provinceId:province.id
      },
      {
        name: 'Guijá',
        provinceId:province.id
      },
      {
        name: 'Limpopo',
        provinceId:province.id
      },
      {
        name: 'Mabalane',
        provinceId:province.id
      },
      {
        name: 'Manjacaze',
        provinceId:province.id
      },
      {
        name: 'Mapai',
        provinceId:province.id
      },
      {
        name: 'Massangena',
        provinceId:province.id
      },
      {
        name: 'Massingir',
        provinceId:province.id
      },
      {
        name: 'Xai-Xai',
        provinceId:province.id
      }
    ])
  }
}
