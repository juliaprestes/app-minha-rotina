import { Response, Express } from 'express'

const routes: {
  route: string
  function: (response: Response, body: any) => Express
  type?: 'post' | 'get'
}[] = [
    {
      route: '/auth/login',
      function: require('../packages/auth/login').default,
      type: 'post'
    },
    {
      route: '/auth/create-user',
      function: require('../packages/auth/createUser').default,
      type: 'post'
    },
    {
      route: '/auth/lost-pass',
      function: require('../packages/auth/lostPass').default,
      type: 'post'
    },
    {
      route: '/auth/redefine-pass',
      function: require('../packages/auth/redefinePass').default,
      type: 'post'
    },
  ]

export default routes
