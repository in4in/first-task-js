<template>
  <div v-if="segments.length">
    <div class="row" v-for="segment in filteredSegments" :key="segment.id">
      <div class="col s4">
        <div class="muted">{{ segment.origin }} – {{ segment.destination }}</div>
        {{ formatTime(segment.dateStart) }} – {{ formatTime(segment.dateEnd) }}
      </div>
      <div class="col s4">
        <div class="muted">В пути</div>
        {{ durationTime(segment.duration) }}
      </div>
      <div v-if="segment.stops.length" class="col s4">
        <div class="muted">{{ segment.stops.length }} пересадки</div>
        {{ segment.stops.join(', ') }}
      </div>
      <div v-else class="col s4">
        <div class="muted">Пересадки</div>
        Без пересадок
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script setup lang="ts">
  import { formatTime, durationTime } from '@/logic/utils';
  import { Segment } from '@/logic/interfaces';

  const props = defineProps<{
    segments: string[]
  }>();

  const filteredSegments = reactive<Segment[]>([]);
  const { getSegment } = useSegments();

  onMounted(() => {
    props.segments.forEach(id => {
      filteredSegments.push(getSegment(id));
    });
  });
</script>

<style lang="scss" scoped>
  .muted {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #A0B0B9;
  }
  .row {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>