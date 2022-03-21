<template>
  <div class="container">
    <img src="/img/logo.svg" width="82" height="89" class="logo">
    <div class="row">
      <div class="col s12 xl4">
        <div class="row">
          <div class="col s12 m6 xl12">
            <transfer-list />
          </div>
          <div class="col s12 m6 xl12">
            <company-list />
          </div>
        </div>
      </div>
      <div class="col s12 xl8">
        <type-list />
        <ticket-list />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from '#app';
import TransferList from './components/TransferList.vue';
import CompanyList from './components/CompanyList.vue';
import TypeList from './components/TypeList.vue';
import TicketList from './components/TicketList.vue';

const router = useRouter();
const { updateState } = useApp(router);
const { setSegments } = useSegments();
const service = useData('segments');
setSegments(service.list());

router.beforeEach(to => updateState(to.query));
</script>