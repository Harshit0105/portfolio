import base_url from "./config";

export function getSkills() {
  let url = base_url + "skills/";
  return fetch(url).then((data) => data.json());
}
