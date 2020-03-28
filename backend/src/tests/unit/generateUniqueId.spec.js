const generateUniqueId = require ('../../utils/generateUniqueId');

describe('Gnerate Unique ID', () => {
  it('should generate an unique ID', () =>{
    const id = generateUniqueId();

    expect(id).toHaveLength(8); //Exemplo que o id deve ter o tamnho de 8 caracteres
  })
})