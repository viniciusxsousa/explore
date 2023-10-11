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

        this.rows = this.table.querySelectorAll('tbody tr');
        
        if(this.rows.length === 0) {
            this.noFavorites = this.body.querySelector('.no-favorites');
            this.noFavorites.classList.remove('no-favorites-disable');
            this.noFavorites.classList.add('no-favorites-active');
        }
    }
}