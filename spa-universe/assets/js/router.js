export class Router {
    routes = {}

    routesAdd(routerName, link){
        this.routes[routerName] = link;
    }

    router(event) {
        event = event || window.event;
        event.preventDefault();

        const pathname = event.target.href;

        window.history.pushState({}, '', pathname);

        this.handler();
    }

    handler(){
        const pathname = window.location.pathname;
        const rota = this.routes[pathname];

        fetch(rota)
            .then(data => data.text())
            .then(html => document.querySelector('#app').innerHTML = html);
    }

}