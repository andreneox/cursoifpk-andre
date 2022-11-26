'use strict';
const { User } =require ('../models')
const bcrypt = require ("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const salt = await bcrypt.genSalt(12)
   const passwordHash = await bcrypt.hash('admin', salt)
   await User.create({
    nome: 'Administrador',
    email: 'admin@admin.com',
    password: passwordHash
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await User.findOne ({
      where: {
        email: 'admin@admin.com'
      }
    }).destroy()
  }
};
