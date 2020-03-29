export function setRoutes(state, routes) {
    state.routes = routes
    state.routes = routes.sort(function (a, b) { return a.length - b.length })
}