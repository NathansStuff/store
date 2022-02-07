import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },

  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('john', 10),
  },

  {
    name: 'Mary Smith',
    email: 'mary@example.com',
    password: bcrypt.hashSync('mary', 10),
  },
];

export default users;
