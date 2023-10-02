const routes = {
    '/': '/pages/home.html',
    '/sobre': '/pages/sobre.html',
    '/contato': '/pages/contato.html',
    404: '/pages/404.html'
}

function router(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, '', event.target.href);

    handle();
}

function handle() {
    const pathname = window.location.pathname;
    const route = routes[pathname];

    console.log(route);

    fetch(route)
        .then(date => date.text())
        .then(html => console.log(html));
}