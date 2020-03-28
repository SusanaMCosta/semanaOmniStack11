const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ong', () => {

    beforeEach( async () =>{
        await connection.migrate.rollback(); //zerar o banco
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Apad",
                email: "susan@gmail.com",
                whatsapp: "8888888888",
                city: "Russas",
                uf: "CE"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});