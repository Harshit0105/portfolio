import { fetchResource } from "./api";

export function getEducations(options) {
  return fetchResource("educations/", options);
}
