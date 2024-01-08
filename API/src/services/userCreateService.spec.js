const UserCreateService = require('./UserCreateService');
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory.js');
const AppError = require('../utils/AppError');

describe('User Tests', () => {
    it("user must be registered", async () => {
        const user = {
            name: "User Test",
            email: "test@mail.com",
            password: "123" 
        };
    
        const userRepositoryInMemory = new UserRepositoryInMemory();
        const userCreateService = new UserCreateService(userRepositoryInMemory);
        const userCreated = await userCreateService.execute(user);
    
        expect(userCreated).toHaveProperty("id");
    })

    it('User must not register with existing email', async () => {
        const user1 = {
            name: 'user 01',
            email: 'user@mail.com',
            password: '123'
        };

        const user2 = {
            name: 'user 02',
            email: 'user@mail.com',
            password: '456'
        };

        const userRepositoryInMemory = new UserRepositoryInMemory();
        const userCreateService = new UserCreateService(userRepositoryInMemory);

        await userCreateService.execute(user1);
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("O usuário já existe!"));

    })

})

