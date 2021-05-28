import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'name'

    const province = await Province.findByOrFail('code', 'MZ-MPM')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Distrito Urbano de KaMpfumo',
        provinceId: province.id,
      },
      {
        name: 'Distrito Urbano de Nlhamankulu',
        provinceId: province.id,
      },
      {
        name: 'Distrito Urbano de KaMaxaquene',
        provinceId: province.id,
      },
      {
        name: 'Distrito Urbano de KaMavota',
        provinceId: province.id,
      },
      {
        name: 'Distrito Urbano de KaMubukwana',
        provinceId: province.id,
      },
      {
        name: 'Distrito Municipal de KaTembe',
        provinceId: province.id,
      },
      {
        name: 'Distrito Municipal de KaNyaka',
        provinceId: province.id,
      },
    ])
  }
}
