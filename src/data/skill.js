import { fetchResource } from "./api";

export function getSkills(options) {
  return fetchResource("skills/", options);
}
