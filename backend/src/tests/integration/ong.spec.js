const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection');
describe('ONG', () => {
  
  beforeEach(async () => { //antes de cada um dos testes executa migration
    await connection.migrate.rollback(); //zera o banco
    await connection.migrate.latest(); // os testes só executam após as migrations 
  });

  afterAll(async () => { // destroi a conexao com o banco de teste depois que todos os testes forem exeutados
    await connection.destroy();
  });

  it('should be able to create a new ong', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      name : "ONG2",
      email: "contato@ong.com",
      whatsapp: "6500000000",
      city: "Cuiabá",
      uf: "MT"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
});