import { Express } from 'express'
import routes from './routes'

export default function api(app: Express) {
  routes.map((route) => {
    switch (route.type) {
      case 'post':
        app.post(route.route, route.function)
        break
      case 'get':
        app.get(route.route, route.function)
        break
      default:
        app.post(route.route, route.function)
        break
    }
  })
}



