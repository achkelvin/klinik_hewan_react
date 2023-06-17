import { url } from './url';

export function getAsset(id) {
  return url + `/assets/${id}`;
}
