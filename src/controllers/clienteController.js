const { clienteService } = require('../services/authService');

exports.listarClientes = (req, res) => {
  const clientes = clienteService.listar();
  res.json(clientes);
};

exports.registrarFollowUp = (req, res) => {
  const { id } = req.params;
  const { data, tipo_contato, anotacao, nivel_interesse } = req.body;
  const result = clienteService.registrarFollowUp(id, { data, tipo_contato, anotacao, nivel_interesse });
  if (!result) return res.status(404).json({ message: 'Cliente não encontrado' });
  res.status(201).json({ message: 'Follow up registrado' });
};
