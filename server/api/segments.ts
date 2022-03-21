import segments from '../data/segments.json';

export default async ({ url }) => {
  const match = url.match(/^\/(.+)$/);
  if (match) {
    const segment = segments.find(item => item.id == match[1]);
    return segment;
  }
  return segments;
};