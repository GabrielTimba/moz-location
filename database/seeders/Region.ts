import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Region from 'App/Models/Region'

export default class RegionSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'name'

    await Region.updateOrCreateMany(uniqueKey, [
      {
        name: 'sul',
      },
      {
        name: 'norte',
      },
      {
        name: 'centro',
      },
    ])
  }
}
