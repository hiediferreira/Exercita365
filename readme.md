# EXERCITA365
O Exercita365 é uma aplicação onde o usuário pode cadastrar-se ou fazer login no sistema para cadastrar dicas de locais para prática de alguma atividade física.

### Funcionalidades
Uma vez que o usuário esteja logado no sistema, ele pode cadastrar um novo local, visualizar, deletar ou alterar um local que tenha sido cadastrado por ele. Ao informar o cep do local, a cidade e estado são salvas automaticamente no banco de dados, conforme a resposta obtida da API Awesome Cep. Um link onde ao clicar redireciona o usuário para o local no Google Maps, também é gerado automaticamante baseado no cep informado e salvo no banco de dados.

### Rodando o repositório:
* Clone o repositório para sua máquina: `git clone https://github.com/hiediferreira/Exercita365.git`;
* Na primeira vez, será necessário instalar as dependências: `npm install`;
* Copie o arquivo *.env_exemple* (arquivo onde informa quais são as variáveis de ambiente do projeto), renomeie para *.env* e coloque suas credenciais nele;
* Para rodar o repositório em ambiente local execute: `npm run start:dev`.

### Rodando as migrations:
* Para rodar as migrations execute: `sequelize db:migrate` ou `npx sequelize db:migrate`.

### Banco de dados 
O banco de dados utilizado foi PostgreSQL. Abaixo, o esquemático do banco de dados dessa aplicação, desenhada com a ferramente DrawSQL
![drawSQL-image-export-2024-08-04](https://github.com/user-attachments/assets/bac1bb1a-0d42-4e88-9347-7551163cf5a2)

### Bibliotecas utilizadas:
* express;
* sequelize;
* dotenv;
* nodemon;
* cors;
* jsonwebtoken;
* bcryptjs;
* axios;

### Documentação do Sequelize:
https://sequelize.org/docs/v6/core-concepts/model-basics/

### Desenvolvimento
Esse projeto simula uma API REST do lado back-end e foi desenvolvido por Hiédi Ferreira como projeto final do Módulo II do curso de Desenvolvimento Web do projeto *Floripa Mais Tech* em parceria com SENAI/SC.
