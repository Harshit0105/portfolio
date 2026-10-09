import { fetchResource } from "./api";

export function getPortfolios(options) {
  return fetchResource("projects/", options);
}
