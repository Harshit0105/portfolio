import base_url from "./config";

export default function getUsers() {
  let url = base_url + "users/";
  return fetch(url)
    .then((data) => data.json())
    .catch(function (err) {
      return { success: false };
    });
}
