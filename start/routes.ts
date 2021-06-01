import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hi: 'welcome to mozlocation api' }
})

Route.get('/provinces', 'ProvincesController.index')
Route.get('/province/:code', 'ProvincesController.show')

Route.get('/districts', 'DistrictsController.index')
