import { route } from 'quasar/wrappers';
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router/auto';
// import routes from './routes'
import { setupLayouts } from 'virtual:generated-layouts';

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    // routes,

    history: createHistory(process.env.VUE_ROUTER_BASE),
    extendRoutes: routes => {
      return setupLayouts(
        routes.map(route => {
          // set layouts based on path
          if (route.path.includes('admin')) {
            route = {
              ...route,
              meta: {
                ...route.meta,
                layout: 'admin',
              },
            };
          }
          return route;
        }),
      );
    },
  });

  return Router;
});
