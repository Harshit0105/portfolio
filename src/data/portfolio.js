import base_url from "./config";

export function getPortfolios() {
  let url = base_url + "projects/";
  return fetch(url)
    .then((data) => data.json())
    .catch(function (err) {
      return { success: false };
    });
}
