import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("saini", 10),
    isAdmin: true,
  },
  {
    name: "Lakshay saini",
    email: "lakshay@gmail.com",
    password: bcrypt.hashSync("saini", 10),
  },
  {
    name: "Bhanu saini",
    email: "bhanu@saini.com",
    password: bcrypt.hashSync("saini", 10),
  },
];

export default users;
