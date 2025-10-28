let corretores = [];
let clientes = [];
let nextCorretorId = 1;
let nextClienteId = 1;

exports.corretorService = {
  register({ nome, email, senha }) {
    if (corretores.find(c => c.email === email)) return null;
    const corretor = { id: nextCorretorId++, nome, email, senha };
    corretores.push(corretor);
    return corretor;
  },
  login(email, senha) {
    return corretores.find(c => c.email === email && c.senha === senha);
  }
};

exports.clienteService = {
  register({ nome, email, senha }) {
    if (clientes.find(c => c.email === email)) return null;
    const cliente = { id: nextClienteId++, nome, email, senha, followups: [], regioes: [] };
    clientes.push(cliente);
    return cliente;
  },
  login(email, senha) {
    return clientes.find(c => c.email === email && c.senha === senha);
  },
  listar() {
    return clientes;
  },
  registrarFollowUp(id, followup) {
    const cliente = clientes.find(c => c.id == id);
    if (!cliente) return null;
    cliente.followups.push(followup);
    return true;
  }
};
