import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import District from 'App/Models/District'

export default class DistrictsController {
  public async index({ request, response }: HttpContextContract) {
    const code = request.qs().code

    if (!code) {
      return response.status(400).json({ error: 'Province not specified' })
    }
    const distrcts = await District.query().whereIn('province_id', (subquery) => {
      subquery.select('id').from('provinces').where('code', code)
    })

    if (!distrcts.length) {
      return response.status(404).json({ error: 'Province not found' })
    }

    return distrcts
  }
}
