const helper = require('../helpers/clients.helper');


describe("Internal Accounts Endpoint", () => {

    it("GET /Accounts/:idConta/balance", async () => {

        const payload = {
            "tipoConta": 2,
            "cpf": 25991689024,
            "nome": "Test Client",
            "dataNascimento": "09/08/1992"
        };

        await helper
            .apiServer
            .post(`/clients/account`)
            .send(payload)
            .expect(200);

        const idConta = "1";

        await helper
            .apiServer
            .get(`/accounts/${idConta}/balance`)
            .expect(200);
    });


    it("GET /Accounts/:idConta/transactions", async () => {

        const idConta = "1";

        await helper
            .apiServer
            .get(`/accounts/${idConta}/transactions`)
            .expect(200);
    });
});


