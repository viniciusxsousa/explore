const UserCreateService = require('./UserCreateService');

it("user must be registered", () => {
    const user = {
        name: "User Test",
        email: "test@mail.com",
        password: "123" 
    };

    const userCreateService = new UserCreateService();
    const userCreated = await userCreateService.execute(user);

    expect(userCreated).toHaveProperty("id");
})