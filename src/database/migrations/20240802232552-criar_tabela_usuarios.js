'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', { 
      id: {
        type: Sequelize.INTEGER,  //inteiro
        allowNull: false,         //não pode ser nulo
        autoIncrement: true,      //se autoencrementa
        primaryKey: true          //chave primaria   
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      sexo: {
        type: Sequelize.ENUM('Feminino', 'Masculino', 'Não informado'),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true        //único
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,        
        unique: true        
      },
      cep: {
        type: Sequelize.STRING(9),
        allowNull: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
