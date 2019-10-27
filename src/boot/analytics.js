import VueAnalytics from 'vue-analytics';

export default async ({ router, Vue }) => {
  Vue.use(VueAnalytics, {
    id: 'UA-120904325-1',
    router
  });
}
