import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Region from 'App/Models/Region'
import Province from 'App/Models/Province'

export default class ProvinceSeeder extends BaseSeeder {
  public async run() {
    let northId: number = 0
    let centerId: number = 0
    let southId: number = 0
    const uniqueKey = 'name'

    const regions = await Region.all()
    regions.map((region) => {
      switch (region.name.toUpperCase()) {
        case 'NORTE':
          northId = region.id
          break
        case 'CENTRO':
          centerId = region.id
          break
        case 'SUL':
          southId = region.id
          break
      }
    })

    await Province.updateOrCreateMany(uniqueKey, [
      {
        name: 'Cabo Delgado',
        capital: 'Pemba',
        code: 'MZ-P',
        regionId: northId,
      },
      {
        name: 'Niassa',
        capital: 'Lichinga',
        code: 'MZ-A',
        regionId: northId,
      },
      {
        name: 'Nampula',
        capital: 'Nampula',
        code: 'MZ-N',
        regionId: northId,
      },
      {
        name: 'Tete',
        capital: 'Tete',
        code: 'MZ-T',
        regionId: centerId,
      },
      {
        name: 'Sofala',
        capital: 'Beira',
        code: 'MZ-S',
        regionId: centerId,
      },
      {
        name: 'Zambézia',
        capital: 'Quelimane',
        code: 'MZ-Q',
        regionId: centerId,
      },
      {
        name: 'Manica',
        capital: 'Chimoio',
        code: 'MZ-B',
        regionId: centerId,
      },
      {
        name: 'Inhambane',
        capital: 'Inhambane',
        code: 'MZ-I',
        regionId: southId,
      },
      {
        name: 'Gaza',
        capital: 'Xai-xai',
        code: 'MZ-G',
        regionId: southId,
      },
      {
        name: 'Maputo',
        capital: 'Matola',
        code: 'MZ-L',
        regionId: southId,
      },
      {
        name: 'Cidade de Maputo',
        capital: '---',
        code: 'MZ-MPM',
        regionId: southId,
      },
    ])
  }
}
