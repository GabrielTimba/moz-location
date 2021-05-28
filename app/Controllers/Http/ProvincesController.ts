import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Province from 'App/Models/Province'

export default class ProvincesController {
  public async index({}: HttpContextContract) {
    const provinces = await Province.query().preload('region').orderBy('region_id', 'asc')

    return provinces
  }

  public async show({ response, params }: HttpContextContract) {
    const province = await Province.query().preload('region').where('code', params.code)

    if (!province.length) {
      return response.status(404).json({ error: 'province not found' })
    }

    return response.json(province)
  }
}
