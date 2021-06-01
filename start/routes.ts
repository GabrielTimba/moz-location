import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return {
    'hi': 'welcome to mozlocation api',
    '/provinces': 'return list of provinces',
    '/provinces/:code': 'return a specific province',
    '/districts?code=xx-x': 'return a list of districts of a certain province',
  }
})

Route.get('/provinces', 'ProvincesController.index')
Route.get('/province/:code', 'ProvincesController.show')

Route.get('/districts', 'DistrictsController.index')
