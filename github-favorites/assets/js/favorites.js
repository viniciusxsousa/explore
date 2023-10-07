export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);
        this.load();
    }

    load() {
        this.users = [
            {
                login: 'viniciusxsousa',
                name: 'Vinicius Sousa',
                public_repos: '20',
                followers: '10'
            },
            {
                login: 'rafaballerini',
                name: 'Rafaella Ballerini',
                public_repos: '49',
                followers: '46.9k'
            }
        ]
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root);

        this.tbody = this.root.querySelector('table tbody');

        this.update();        
    }

    update() {
        this.removeAllTr();

        this.users.forEach( (user) => {
            const row = this.createRow();

            row.querySelector('.table__user img').src = `https://github.com/${user.login}.png`;
            row.querySelector('.table__user img').alt = `Foto do perfil de ${user.name}`;
            row.querySelector('.table__user a p').innerText = user.name;
            row.querySelector('.table__user a span').innerText = user.login;
            row.querySelector('.table__repository').innerText = user.public_repos;
            row.querySelector('.table__followers').innerHTML = user.followers;

            this.tbody.append(row);
        } )

    }

    createRow() {
        const tr = document.createElement('tr');

        tr.innerHTML = ` 
            <td class="table__user">
            <img src="https://github.com/viniciusxsousa.png" alt="Foto de perfil do usuário">
            <a href="#"><p>Vinicius Sousa</p><span>viniciusxsousa</span></a>
            </td>
            <td class="table__repository">23</td>
            <td class="table__followers">10</td>
            <td class="table__action"><button>x</button></td>
        `;

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach((row) => {
            row.remove();
        })
    }
}