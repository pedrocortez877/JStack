const { v4 } = require("uuid");

const contacts = [
  {
    id: v4(),
    name: "Pedro",
    email: "pedro@gmail.com",
    phone: "982200861",
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
