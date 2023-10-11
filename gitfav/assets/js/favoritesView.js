import { Gitfavorites } from "./gitFavorite.js";

export class favoritesView extends Gitfavorites {
    constructor(appElement) {
        super();

        this.body = document.querySelector(appElement);

        this.update();
    }
    
    update() {
        this.table = this.body.querySelector('.table');
        this.rows = this.table.querySelectorAll('tbody tr');

        this.rows.forEach( (row) => {
            row.remove();
        })
    }
}