'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        email: 'admin@example.com',
        password: hashedPassword,
        type: 'admin',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        email: 'user1@example.com',
        password: hashedPassword,
        type: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
