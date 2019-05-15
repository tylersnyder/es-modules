import $ from './dom.mjs'

export default async function router(routes) {
  const path = window.location.pathname
  const render = routes[path] || routes['/error']
  const view = await render()
  $('#app').html(view)
}
