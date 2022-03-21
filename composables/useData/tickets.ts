import { useLazyFetch } from '#app';

function list() {
  const { data } = useLazyFetch(`/api/tickets`);
  return data;
}

export default { list };