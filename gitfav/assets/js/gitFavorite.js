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

    search(login) {
        const endpoint = `https://api.github.com/users/${login}` 

        return fetch(endpoint)
                .then(data => data.json())
                .then(data => {
                    const { login, name, public_repos, followers } = data

                    return {
                        login,
                        name,
                        public_repos,
                        followers,
                    }
                })
    }

    delete(user) {
        const filterUser = this.users.filter((element) => element.login != user.login);

        this.users = filterUser;

        this.update();
    }

    add(user) {
        try {

            const userExist = this.users.find((element) => element.login === user);

            if(userExist) {
                throw new Error('Usuário já cadastrado');
            }

            this.search(user)
                .then(data => {

                    if(data.login === undefined) {
                        throw new Error('Usuário não encontrado');
                    }

                    this.users = [data, ...this.users];
                    this.update();
                })


        }catch(error) {
            alert(error);
        }

    }
}