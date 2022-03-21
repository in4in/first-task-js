import { reactive, readonly } from 'vue';
import { Segment } from '../logic/interfaces/api';

const state = reactive<{segments: Segment[]}>({
  segments: []
});

const setSegments = (list: Segment[]) => {
  state.segments = list;
};

const getSegment = (id: string) => {
  return state.segments.find((item: Segment) => item.id == id);
}

export default () => ({
  state: readonly(state),
  setSegments,
  getSegment
});