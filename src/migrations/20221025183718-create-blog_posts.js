'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        type: Sequelize.INTERGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.VARCAHR,
        allowNull: false,
      },
      content: {
        type: Sequelize.VARCHAR,
        allowNull: false,
      },
      published: {
        type: Sequelize.DATETIME,
        allowNull: false,
      },
      updated: {
        type: Sequelize.DATETIME,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTERGER,
        allowNull: false,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        }
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
