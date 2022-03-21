export const formatTime = timestamp => new Intl.DateTimeFormat('ru-RU', {
    hour: 'numeric',
    minute: 'numeric'
  }).format(new Date(timestamp));

export const durationTime = duration => {
  const hours = Math.trunc(duration / (3600 * 1000));
  const minutes = Math.ceil((duration % (3600 * 1000)) / (60 * 1000));
  return `${hours}ч ${minutes}м`;
};