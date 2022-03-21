import { reactive, readonly, ref } from 'vue';
import { AppState, ListItem } from '@/logic/interfaces/state';
import { pick, without, defaults, isEmpty } from 'underscore';

const deaultState = {
  type: 1,
  transfer: [ 0 ],
  company: '',
};

const state = reactive<AppState>(defaults({
  limit: 5,
  amount: 5,
}, deaultState));

const appRouter = ref();

const updateState = (newState: object) => {
  if (isEmpty(newState)) {
    return Object.keys(deaultState).forEach(key => {
      state[key] = deaultState[key];
    });
  }
  defaults(newState, deaultState);
  const keys = Object.keys(newState);
  keys.forEach(key => {
    if (['transfer'].includes(key)) {
      return state[key] = newState[key].split(',').filter(v => v).map(v => parseInt(v));
    }
    if (['type'].includes(key)) {
      return state[key] = parseInt(newState[key]);
    }
    state[key] = newState[key];
  });
};

const onChange = (event: Event) => {
  const query = {};
  const {name, value} = event.target;
  Object.keys(pick(state, 'type', 'transfer', 'company')).forEach(key => {
    query[key] = state[key];
  });
  if (['transfer'].includes(name)) {
    if (query[name].includes(+value)) {
      query[name] = without(query[name], +value);
    } else {
      query[name].push(+value);
    }
  } else {
    query[name] = value;
  }
  appRouter.value.push('/?' + new URLSearchParams(query));
};

const types = ref<ListItem[]>([
  { id: 1, name: 'Самый дешевый' },
  { id: 2, name: 'Самый быстрый' },
  { id: 3, name: 'Оптимальный' }
]);

const transfers = ref<ListItem[]>([
  { id: 0, name: 'Без пересадок' },
  { id: 1, name: '1 пересадка' },
  { id: 2, name: '2 пересадки' },
  { id: 3, name: '3 пересадки' }
]);

const nextPage = () => state.limit += state.amount;

export default (router: Router) => {
  if (router) {
    appRouter.value = router;
    if (Object.keys(router.currentRoute.query).length) {
      updateState(router.currentRoute.query);
    }
  }

  return {
    state: readonly(state),
    types: readonly(types),
    transfers: readonly(transfers),
    updateState,
    onChange,
    nextPage
  };
};