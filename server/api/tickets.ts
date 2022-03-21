import tickets from '../data/tickets.json';
import segments from '../data/segments.json';

const getSegment = id => {
  return segments.find(item => item.id == id);
};

const getTicketHasCorrectSegment = ticket => {
  return ticket.segments.some(item => {
    const segment = getSegment(item);
    return segment.origin == 'MOW' && segment.destination == 'EKT'
  });
};

export default async () => {
  return tickets.filter(ticket => getTicketHasCorrectSegment(ticket));
};