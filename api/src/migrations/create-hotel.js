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
      name: {
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
      longitude: {
        type: Sequelize.DOUBLE
      },
      latitude: {
        type: Sequelize.DOUBLE
      },
      evaluate: {
        type: Sequelize.FLOAT
      },
      numberReview: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      minCost: {
        type: Sequelize.INTEGER
      },
      saleMax: {
        type: Sequelize.INTEGER
      },
      status: {
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