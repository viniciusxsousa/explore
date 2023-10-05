import { Router } from "./router.js";

const router = new Router();
const body = document.querySelector('body');
const pathname = window.location.pathname

router.routesAdd('/', '/assets/pages/home.html');
router.routesAdd('/universo', '/assets/pages/universo.html');
router.routesAdd('/exploracao', '/assets/pages/exploracao.html');

router.handler();

window.router = () => router.router;


switch(pathname) {
    case '/':
        console.log('Entrou em /');
        body.style.backgroundImage = 'url(../assets/imgs/background-01.png)';
        break
    case '/universo':
        console.log('Entrou em /universo');
        body.style.backgroundImage = 'url(../assets/imgs/background-02.png)';
        break   
    case '/exploracao':
        console.log('Entrou em /exploracao');
        body.style.backgroundImage = 'url(../assets/imgs/background-03.png)';
        break    
}