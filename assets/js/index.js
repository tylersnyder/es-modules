import router from './util/router.mjs'
import Home from './views/home.mjs'
import About from './views/about.mjs'

router({
  '/': Home,
  '/about': About,
  '/error': () => `
    <h1>Oops!</h1>
    Page not found.
    <br />
    <a href="/">Go home</a>
  `
})
