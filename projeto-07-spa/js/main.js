import { Router } from "./router.js";
debugger
const router = new Router();

router.add('/', '/pages/home.html');
router.add('/sobre', '/pages/sobre.html');
router.add('/contato', '/pages/contato.html');
router.add('/404', '/pages/404.html');

router.handle();


window.addEventListener('popstate', () => router.handle());
window.router = () => router.router();