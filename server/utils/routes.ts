import { Response, Express } from 'express'

const routes: {
  route: string
  function: (response: Response, body: any) => Express
  type?: 'post' | 'get'
}[] = [
  {
    route: '/auth/login',
    function: require('../packages/auth/login').default,
  },
  {
    route: '/auth/create-user',
    function: require('../packages/auth/createUser').default,
  },
]

export default routes
