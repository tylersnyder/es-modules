import log from "./logger.mjs";

export default async function request (url, opts) {
  try {
    const options = opts || {};
    const res = await fetch(url, options);
    const json = await res.json();
    log(`${url}: ${JSON.stringify(json)}`);
    return json;
  } catch (err) {
    log(err);
    return null;
  }
}
