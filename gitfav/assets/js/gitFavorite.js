export class Gitfavorites {
    constructor() {
        this.users = [{
            login: 'viniciusxsousa',
            name: 'name',
            public_repos: '24',
            followers: '13',
        }, {
            login: 'rafaballerini',
            name: 'Rafaela Ballerini',
            public_repos: '50',
            followers: '130',
        }];
    }

    delete(user) {
        const filterUser = this.users.filter((element) => element.login != user.login);

        this.users = filterUser;

        this.update();
    }
}