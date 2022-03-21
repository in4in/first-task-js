import { reactive, readonly, computed } from 'vue';
import { Ticket } from '../logic/interfaces/api';

const { state: stateApp, nextPage } = useApp();
const { getSegment } = useSegments();

const state = reactive<{
  tickets: Ticket[],
  filteredLength: number,
  ticketsDuration: object,
  ticketsTransfer: object
}>({
  tickets: [],
  filteredLength: 0,
  ticketsDuration: {},
  ticketsTransfer: {}
});

const getTicketDuration = (ticket: Ticket): number => {
  if (state.ticketsDuration[ticket.id]) {
    return state.ticketsDuration[ticket.id];
  }
  const duration: number = ticket.segments.reduce((amount, segment) => amount + getSegment(segment).duration, 0);
  state.ticketsDuration[ticket.id] = duration;
  return duration;
}

const getTicketTransfer = (ticket: Ticket): number => {
  if (state.ticketsTransfer[ticket.id]) {
    return state.ticketsTransfer[ticket.id];
  }
  const transfer: number = ticket.segments.reduce((amount, segment) => amount + getSegment(segment).stops.length, 0);
  state.ticketsTransfer[ticket.id] = transfer;
  return transfer;
}

const setTickets = (list: Ticket[]): void => {
  state.tickets = list;
};

const filters = {
  company: (list: Ticket[]) => list.filter((item: Ticket) => stateApp.company ? stateApp.company == item.companyId : true),
  transfer: (list: Ticket[]) => list.filter((item: Ticket) => stateApp.transfer.length ? stateApp.transfer.includes(getTicketTransfer(item)) : true),
};

const sorters = [
  (list: Ticket[]) => list, // Без сортировки
  (list: Ticket[]) => list.sort((a, b) => a.price - b.price), // Дешевый
  (list: Ticket[]) => list.sort((a, b) => getTicketDuration(a) - getTicketDuration(b)), // Быстрый
  (list: Ticket[]) => list, // Оптимальный
];

const filteredTickets = computed(() => {
  if (!state.tickets) {
    return state.tickets;
  }

  const filtered = filters.transfer(filters.company(state.tickets));
  const sorted = sorters[stateApp.type](filtered);

  state.filteredLength = filtered.length;

  return sorted.slice(0, stateApp.limit);
});

export default () => ({
    state: readonly(state),
    setTickets,
    filteredTickets,
    nextPage
});