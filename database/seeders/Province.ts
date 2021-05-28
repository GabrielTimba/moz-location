import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Region from 'App/Models/Region'
import Province from 'App/Models/Province'

export default class ProvinceSeeder extends BaseSeeder {
  public async run() {
    let north_id:number=0,center_id: number=0,south_id: number=0;
    const uniqueKey = 'name'

    const regions = await Region.all()
    regions.map(region=>{
      switch(region.name.toUpperCase()) {
        case 'NORTE':
          north_id=region.id
          break;
        case 'CENTRO':
          center_id=region.id
          break;
        case 'SUL':
          south_id=region.id
          break;
      }
    })

    await Province.updateOrCreateMany(uniqueKey, [
      {
        name: 'Cabo Delgado',
        capital: 'Pemba',
        code:'MZ-P',
        regionId:north_id
      },
      {
        name: 'Niassa',
        capital: 'Lichinga',
        code:'MZ-A',
        regionId:north_id
      },
      {
        name: 'Nampula',
        capital: 'Nampula',
        code:'MZ-N',
        regionId:north_id
      },
      {
        name: 'Tete',
        capital: 'Tete',
        code:'MZ-T',
        regionId:center_id
      },
      {
        name: 'Sofala',
        capital: 'Beira',
        code:'MZ-S',
        regionId:center_id
      },
      {
        name: 'Zambézia',
        capital: 'Quelimane',
        code:'MZ-Q',
        regionId:center_id
      },
      {
        name: 'Manica',
        capital: 'Chimoio',
        code:'MZ-B',
        regionId:center_id
      },
      {
        name: 'Inhambane',
        capital: 'Inhambane',
        code:'MZ-I',
        regionId:south_id
      },
      {
        name: 'Gaza',
        capital: 'Xai-xai',
        code:'MZ-G',
        regionId:south_id
      },
      {
        name: 'Maputo',
        capital: 'Matola',
        code:'MZ-L',
        regionId:south_id
      },
      {
        name: 'Cidade de Maputo',
        capital: '---',
        code:'MZ-MPM',
        regionId:south_id
      },
    ])
  }
}
