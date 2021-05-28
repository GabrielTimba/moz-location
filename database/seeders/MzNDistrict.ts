import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import District from 'App/Models/District'
import Province from 'App/Models/Province'

export default class MzPDistrictSeeder extends BaseSeeder {
  public async run () {
    const uniqueKey='name'

    const province = await Province.findByOrFail('code','MZ-N')
    await District.updateOrCreateMany(uniqueKey, [
      {
        name: 'Angoche',
        provinceId:province.id
      },
      {
        name: 'Eráti',
        provinceId:province.id
      },
      {
        name: 'Ilha de Moçambique',
        provinceId:province.id
      },
      {
        name: 'Lalaua',
        provinceId:province.id
      },
      {
        name: 'Larde',
        provinceId:province.id
      },
      {
        name: 'Liúpo',
        provinceId:province.id
      },
      {
        name: 'Malema',
        provinceId:province.id
      },
      {
        name: 'Meconta',
        provinceId:province.id
      },
      {
        name: 'Mecubúri',
        provinceId:province.id
      },
      {
        name: 'Memba',
        provinceId:province.id
      },
      {
        name: 'Mogincual',
        provinceId:province.id
      },
      {
        name: 'Mogovolas',
        provinceId:province.id
      },
      {
        name: 'Moma',
        provinceId:province.id
      },
      {
        name: 'Monapo',
        provinceId:province.id
      },
      {
        name: 'Mossuril',
        provinceId:province.id
      },
      {
        name: 'Muecate',
        provinceId:province.id
      },
      {
        name: 'Murrupula',
        provinceId:province.id
      },
      {
        name: 'Nacala-a-Velha',
        provinceId:province.id
      },
      {
        name: 'Nacala Porto',
        provinceId:province.id
      },
      {
        name: 'Nacarôa',
        provinceId:province.id
      },
      {
        name: 'Nampula',
        provinceId:province.id
      },
      {
        name: 'Rapale',
        provinceId:province.id
      },
      {
        name: 'Ribaué',
        provinceId:province.id
      },
    ])
  }
}
