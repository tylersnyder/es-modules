import $ from './util/dom.mjs'
import request from './util/request.mjs'

const message = 'Using Async/Await and ES Modules real easy like in this here browser...'

async function send() {
  const url = 'https://reqres.in/api/users/2'
  const user = await request(url)

  $('#container').html(`
    ${message}
    <br />
    ${url}:
    ${JSON.stringify(user)}
  `)
}

send()