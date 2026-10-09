import { fetchResource } from "./api";

export function getWorks(options) {
  return fetchResource("works/", options);
}
