import { Gitfavorites } from "./gitFavorite.js";

export class favoritesView extends Gitfavorites {
    constructor(appElement) {
        super();

        this.body = document.querySelector(appElement);

        this.update();
        this.buttonAdd();
    }
    
    update() {
        this.table = this.body.querySelector('.table');
        this.rows = this.table.querySelectorAll('tbody tr');

        this.rows.forEach( (row) => {
            row.remove();
        })

        this.users.forEach( (user) => {
            const row = this.createRow();

            row.querySelector('.table__tdUser img').src = `https://github.com/${user.login}.png`;
            row.querySelector('.table__tdUser img').alt = `Imagem do ${user.name}`;
            row.querySelector('.table__tdUser a').href = `https://github.com/${user.login}`;
            row.querySelector('.table__tdUser div p').textContent = user.name;
            row.querySelector('.table__tdUser div span').textContent = user.login;
            row.querySelector('.table__tdRepos').textContent = user.public_repos;
            row.querySelector('.table__tdFollew').textContent = user.followers;

            row.querySelector('.table__tdBtn').addEventListener('click', () => {
                const isOk = confirm(`Quer deletar o ${user.name}`);

                if(isOk){
                    this.delete(user);
                }
            })

            this.table.querySelector('tbody').append(row);
        } )
        
        if(this.users.length === 0) {
            this.noFavorites = this.body.querySelector('.no-favorites');
            this.noFavorites.classList.remove('no-favorites-disable');
            this.noFavorites.classList.add('no-favorites-active');
        }

        if(this.users.length > 0) {
            this.noFavorites = this.body.querySelector('.no-favorites');
            this.noFavorites.classList.remove('no-favorites-active');
            this.noFavorites.classList.add('no-favorites-disable');
        }
    }

    createRow() {
        const row = document.createElement('tr');

        row.innerHTML = `<td class="table__tdUser">
                            <img src="https://github.com/viniciusxsousa.png" alt="Imagem do vinicius">
                            <a href="https://github.com/viniciusxsousa">                        
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

    buttonAdd() {
        const button = this.body.querySelector('.header__button');
        const input = this.body.querySelector('#user');

        button.addEventListener('click', () => {
            const userLogin = input.value;

            this.add(userLogin);
        })
    }
}