const helper = require('../helpers/clients.helper');


describe("Internal Clients endpoint", () => {

    it("POST /clients/account", async () => {
        const payload = {
            "tipoConta": 1,
            "cpf": 25991689024,
            "nome": "Test Client",
            "dataNascimento": "09/08/1992"
        };

        console.log(payload)

        await helper
            .apiServer
            .post(`/clients/account`)
            .send(payload)
            .expect(200);
    });

});
