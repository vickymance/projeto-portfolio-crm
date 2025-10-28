Objetivo: 
-Criar uma API Rest para acompanhamento de clientes de uma carteira de corretor de imóveis.

Contexto: 
-A API deve possuir as funcionalidades de: registro de corretor, registrar os dados do cliente como nome, numero de telefone, email, registrar de região de interesse do cliente(cidade/bairro), registrar os imóveis disponíveis e registro de atualizações de clientes, como um follow up para saber quando foi o ultimo contato, o que foi falado e o nível de interesse do cliente pelo imóvel.
-Para que eu possa usar as funcionalidades preciso fazer login como corretor.
-Para que o cliente possa consultar os imóveis disponíveis, ele precisa fazer login como cliente.
-Clientes apenas consultam imóveis disponíveis.
-Corretores acessam todas as funcionalidades do sistema.
-A atualização dos clientes é feita através de anotações sobre o tipo de contato e o que foi conversado com o cliente quando de fato houver contato com o mesmo.

Regras: 
-A documentação da API deve ser feita com Swagger em forma de arquivo, crie esse arquivo em uma pasta de recursos.
-Adicione um endpoint para renderizar o Swagger.
-Construa um arquivo README para descrever o projeto.
-Divida a API em camadas: routes, controllers, service e model.
-Armazene os dados da API em um banco de dados em memória.
Utilize a biblioteca express para construir a API Rest.
-Faça com que a autenticação seja parte do Middleware, utilizando o token JWT como modelo de atuenticação e implemente as regras de autenticação seguindo as informações descritas no contexto.