import base_url from "./config";

export function getWorks() {
  let url = base_url + "works/";
  return fetch(url).then((data) => data.json());
}
