import request from "../util/request.mjs";

const url = "https://reqres.in/api/users/2";

export default async function home () {
  const user = await request(url);

  return `
    Using Async/Await and ES Modules real easy like in this here browser...
    <br />
    ${url}:
    ${JSON.stringify(user)}
    <br />
    <br />
    <a href="/about">About page</a>
  `;
}
