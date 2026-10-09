import { fetchResource } from "./api";

export default function getUsers(options) {
  return fetchResource("users/", options);
}
