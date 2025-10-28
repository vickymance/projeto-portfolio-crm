const jwt = require('jsonwebtoken');
const SECRET = 'supersecret';

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token não fornecido' });
  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });
    req.user = user;
    next();
  });
}

function authorizeCorretor(req, res, next) {
  if (req.user.role !== 'corretor') return res.status(403).json({ message: 'Acesso restrito a corretores' });
  next();
}

function authorizeClienteOuCorretor(req, res, next) {
  if (req.user.role !== 'corretor' && req.user.role !== 'cliente') {
    return res.status(403).json({ message: 'Acesso restrito' });
  }
  next();
}

module.exports = { authenticateJWT, authorizeCorretor, authorizeClienteOuCorretor };
