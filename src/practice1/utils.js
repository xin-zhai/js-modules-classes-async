import { ADDRESS, PORT, PATH } from "./constant";

export function getURL() {
  return `${ADDRESS}:${PORT}${PATH}`;
}
