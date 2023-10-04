export class Router {
    routes = {}

    routesAdd(routerName, link){
        this.routes[routerName] = link;
    }

    router(event) {
        event = event || window.event;
        event.preventDefault();

        const pathname = event.target.pathname;

        window.history.pushState({}, '', pathname);

        this.manipular();
    }

}