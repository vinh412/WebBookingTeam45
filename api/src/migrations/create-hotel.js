'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountID: {
        type: Sequelize.INTEGER
      },
      nameHotel: {
        type: Sequelize.STRING
      },
      revenua: {
        type: Sequelize.INTEGER
      },
      fee: {
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      evaluate: {
        type: Sequelize.INTEGER
      },
      numberReview: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      minCost: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hotels');
  }
};