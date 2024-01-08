const UserCreateService = require('./UserCreateService');
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory.js');

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

    it("Another test", () => {
        expect(1).toBe(2);
    });

})

