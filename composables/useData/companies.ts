import { useLazyFetch } from '#app';

function list() {
  const { data } = useLazyFetch(`/api/companies`);
  return data;
}

export default { list };