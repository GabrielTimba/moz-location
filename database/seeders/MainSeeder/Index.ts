import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    /**
     * Do not run when not in dev mode and seeder is development
     * only
     */
    if (seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../Region'))
    await this.runSeeder(await import('../Province'))

    await this.runSeeder(await import('../MzPDistrict'))
    await this.runSeeder(await import('../MzADistrict'))
    await this.runSeeder(await import('../MzTDistrict'))
    await this.runSeeder(await import('../MzNDistrict'))
    await this.runSeeder(await import('../MzSDistrict'))
    await this.runSeeder(await import('../MzQDistrict'))
    await this.runSeeder(await import('../MzBDistrict'))
    await this.runSeeder(await import('../MzIDistrict'))
    await this.runSeeder(await import('../MzGDistrict'))
    await this.runSeeder(await import('../MzLDistrict'))
    await this.runSeeder(await import('../MzMPMDistrict'))
  }
}
