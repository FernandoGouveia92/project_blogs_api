'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      display_name: {
        type: Sequelize.VARCHAR,
        underscored: true,
      },
      email: {
        type: Sequelize.VARCHAR,
      },
      password: {
        type: Sequelize.VARCHAR,
      },
      image: {
        type: Sequelize.VARCHAR,
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
