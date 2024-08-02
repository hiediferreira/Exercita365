# EXERCITA365
### Exercita365 foi desenvolvido como projeto final do Módulo II do curso de Desenvolvimento Web do Floripa Mais Tech! Nele, colocamos em prática os conhecimentos adquiridos sobre back-end.


## Rodando o repositório:
* Clone o repositório para sua máquina: `git clone https://github.com/hiediferreira/Exercita365.git`
* Na primeira vez, será necessário instalar as dependências: `npm install`
* Copie o arquivo .env_exemple (arquivo onde informa quais são as variáveis de ambiente do projeto), renomeie para .env e coloque suas credenciais nele. 
* Para rodar o repositório em ambiente local execute: `npm run start:dev`

## Trabalhando com migrations:
* Para rodar as migrations execute: `sequelize db:migrate` ou `npx sequelize db:migrate`







### Criar uma migration
1. Opção nº 1: `sequelize migration:generate --name nome_da_migracao`
2. Opção nº 2: `npx sequelize-cli migration:generate --name criar_tabela_alunos`
### Rodar uma migration. Opções:
1. Opção nº 1: `sequelize db:migrate`
2. Opção nº 2: `npx sequelize db:migrate`

### Reverter a última migration:
1. Opção nº 1: `sequelize-cli db:migrate:undo`
2. Opção nº 2: `npx sequelize-cli db:migrate:undo`

### Reverter todas as migrations:
1. Opção nº 1: `sequelize-cli db:migrate:undo:all`
2. Opção nº 2: `npx sequelize-cli db:migrate:undo:all`




## Documentação do Sequelize:
https://sequelize.org/docs/v6/core-concepts/model-basics/

## Bibliotecas utilizadas:
### instalar o sequelize
`npm install sequelize` 
### instalar o CLI do sequelize
`npm install -g sequelize-cli`
### instalar o dotenv - variáveis de ambiente
`npm install dotenv`
### instalar o cors
`npm install cors`
### instalar o driver do PostgreSQL
`npm install pg` 
### instalar o JsonWebToken ( JWT )
`npm install jsonwebtoken`
### instalar bcryptsjs
`npm install bcryptjs`
### instalar o axios
`npm install axios`

## Inicializar sequelize
`npx sequelize-cli init`
