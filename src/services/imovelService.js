let imoveis = [];
let nextImovelId = 1;

exports.imovelService = {
  listar() {
    return imoveis;
  },
  cadastrar({ titulo, descricao, cidade, bairro, preco }) {
    const imovel = { id: nextImovelId++, titulo, descricao, cidade, bairro, preco };
    imoveis.push(imovel);
    return imovel;
  }
};
