import tickets from './tickets';
import companies from './companies';
import segments from './segments';

const api = {
  tickets,
  companies,
  segments
};

export default name => api[name] || {};