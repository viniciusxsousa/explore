import { Router } from "./router.js";

const router = new Router();

router.routesAdd('/', '/assets/pages/home.html');
router.routesAdd('/universo', '/assets/pages/universo.html');
router.routesAdd('/exploracao', '/assets/pages/exploracao.html');

router.handler();

window.router = () => router.router;