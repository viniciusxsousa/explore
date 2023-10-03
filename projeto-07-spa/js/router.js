export class Router {
    routes = {};

    add(routerName, link) {
        this.routes[routerName] = link;
    }

    router(event) {
        event = event || window.event;
        event.preventDefault();
    
        window.history.pushState({}, '', event.target.href);
    
        this.handle();
    }

   handle() {
        const pathname = window.location.pathname;
        const route = this.routes[pathname] ? this.routes[pathname] : this.router['/404'];
    
    
        fetch(route)
            .then(date => date.text())
            .then(html => document.querySelector('.app').innerHTML = html);
    }
}