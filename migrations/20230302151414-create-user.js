'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        required: true,
        len: [2,18]
      },
      surname: {
        type: Sequelize.STRING,
        required:true,
        len: [2,50],
      },
      phone: {
        type: Sequelize.STRING,
        max: 9
      },
      email: {
        type: Sequelize.STRING,
        required:true,
        unique: true
      },
      password:{
        type: Sequelize.STRING,
        required:true,
        len: [5,16],
      },
      roles_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Roles",
          key: "id"
        }
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
    await queryInterface.dropTable('Users');
  }
};