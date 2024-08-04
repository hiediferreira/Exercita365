'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('locais', { 
      id: {
        type: Sequelize.INTEGER,  //inteiro
        allowNull: false,         //não pode ser nulo
        autoIncrement: true,      //se autoencrementa
        primaryKey: true          //chave primaria
      },
      nomeLocal: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      cepLocal: {
        type: Sequelize.STRING(9),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      estado: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tipoAtividade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      linkGoogleMaps: {
        type: Sequelize.STRING,
        allowNull: true
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false        
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('locais');
  }
};
