import $ from './dom.mjs'

export default async function router(views) {
  const path = window.location.pathname
  const render = views[path] || views['/error']
  const view = await render()
  $('#app').html(view)
}
