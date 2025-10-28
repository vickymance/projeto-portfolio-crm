const { corretorService, clienteService } = require('../services/authService');
const jwt = require('jsonwebtoken');
const SECRET = 'supersecret';

exports.registerCorretor = (req, res) => {
  const { nome, email, senha } = req.body;
  const result = corretorService.register({ nome, email, senha });
  if (!result) return res.status(400).json({ message: 'Email já cadastrado' });
  res.status(201).json({ message: 'Corretor registrado com sucesso' });
};

exports.loginCorretor = (req, res) => {
  const { email, senha } = req.body;
  const corretor = corretorService.login(email, senha);
  if (!corretor) return res.status(401).json({ message: 'Credenciais inválidas' });
  const token = jwt.sign({ id: corretor.id, role: 'corretor' }, SECRET, { expiresIn: '1d' });
  res.json({ token });
};

exports.registerCliente = (req, res) => {
  const { nome, email, senha } = req.body;
  const result = clienteService.register({ nome, email, senha });
  if (!result) return res.status(400).json({ message: 'Email já cadastrado' });
  res.status(201).json({ message: 'Cliente registrado com sucesso' });
};

exports.loginCliente = (req, res) => {
  const { email, senha } = req.body;
  const cliente = clienteService.login(email, senha);
  if (!cliente) return res.status(401).json({ message: 'Credenciais inválidas' });
  const token = jwt.sign({ id: cliente.id, role: 'cliente' }, SECRET, { expiresIn: '1d' });
  res.json({ token });
};
