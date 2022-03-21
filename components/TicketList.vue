<template>
  <div v-if="filteredTickets.length">
    <div v-for="ticket in filteredTickets" :key="ticket.id" class="card-ticket">
      <div class="row">
        <div class="col s6 card-ticket__price" v-money:rub="ticket.price"></div>
        <div class="col s6 card-ticket__logo"><img :src="'/img/' + getCompanyLogo(ticket.companyId)"></div>
      </div>
      <SegmentsList :segments="ticket.segments" />
    </div>
    <button type="button" v-if="stateTicket.filteredLength > stateApp.limit" @click="nextPage()">Показать еще {{ stateApp.amount }} билетов!</button>
  </div>
  <div v-else>
    <div class="card-ticket">
      Под заданные условия не найдено ни одного билета. Поменяйте условия.
    </div>
  </div>
</template>

<script setup lang="ts">
  import {vMoney} from '@/logic/directives';
  import SegmentsList from '@/components/SegmentList.vue';
  
  const ticketService = useData('tickets');
  const { state: stateApp } = useApp();
  const { state: stateTicket, filteredTickets, setTickets, nextPage } = useTickets();
  const { getCompanyLogo } = useCompanies();
  setTickets(ticketService.list());
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  button {
    background-color: #2196F3;
    border: 1px solid #2196F3;
    border-radius: 5px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
    display: block;
    padding: 15px 20px;
    width: 100%;
    cursor: pointer;
  }
</style>