import { reactive, readonly } from 'vue';
import { Company } from '../logic/interfaces/api';

const state = reactive<{companies: Company[]}>({
  companies: []
});

const setCompanies = (list: Company[]) => {
  state.companies = list;
};

const getCompanyLogo = (id: string) => {
  const company = state.companies.filter(item => item.id == id);
  return company.length ? company[0].logo : '';
};

export default () => ({
  state: readonly(state),
  setCompanies,
  getCompanyLogo
});