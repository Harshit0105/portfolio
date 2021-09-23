import base_url from "./config";

export function getEducations() {
  let url = base_url + "educations/";
  return fetch(url)
    .then((data) => data.json())
    .catch(function (err) {
      return { success: false };
    });
}
