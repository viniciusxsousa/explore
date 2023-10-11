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

        this.users.forEach( (user) => {
            const row = this.createRow();

            this.table.append(row);
        } )

        this.rows = this.table.querySelectorAll('tbody tr');
        
        if(this.rows.length === 0) {
            this.noFavorites = this.body.querySelector('.no-favorites');
            this.noFavorites.classList.remove('no-favorites-disable');
            this.noFavorites.classList.add('no-favorites-active');
        }
    }

    createRow() {
        const row = document.createElement('tr');

        row.innerHTML = `<td class="table__tdUser">
                            <img src="https://github.com/viniciusxsousa.png" alt="Imagem do vinicius">
                            <a href="https://github.com/viniciusxsousa.png">                        
                            <div>
                                <p>Viniciu Sousa </p>
                                <span>/viniciusxsousa</span>
                            </div>
                            </a>
                        </td>
                        <td class="table__tdRepos">25</td>
                        <td class="table__tdFollew" >13</td>
                        <td class="table__tdBtn">Remover</td>`

        return row
    }
}