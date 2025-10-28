const { imovelService } = require('../services/imovelService');

exports.listarImoveis = (req, res) => {
  const imoveis = imovelService.listar();
  res.json(imoveis);
};

exports.cadastrarImovel = (req, res) => {
  const { titulo, descricao, cidade, bairro, preco } = req.body;
  const imovel = imovelService.cadastrar({ titulo, descricao, cidade, bairro, preco });
  res.status(201).json(imovel);
};
