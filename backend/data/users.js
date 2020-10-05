import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'lalla',
    email: 'lalla@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'hari',
    email: 'hari@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default users;
