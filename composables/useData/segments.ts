import { useLazyFetch } from '#app';

function list() {
  const { data } = useLazyFetch(`/api/segments`);
  return data;
}

function item(id) {
  const { data } = useLazyFetch(`/api/segments/${id}`);
  return data;
}

export default { list, item };