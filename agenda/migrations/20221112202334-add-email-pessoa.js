'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */ //adicionando colunas await queryInterface.addColumn('nome da tabela', 'coluna que quer adicionar',{ type e etc }
     await queryInterface.addColumn('pessoas', 'email',{
        type: Sequelize.STRING(150),
        allowNull: true   
     });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
