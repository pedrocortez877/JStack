const { v4 } = require("uuid");
const db = require("../../database");

let contacts = [
  {
    id: v4(),
    name: "Pedro",
    email: "pedro@gmail.com",
    phone: "982200861",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "José",
    email: "José@gmail.com",
    phone: "982200861",
    category_id: v4(),
  },
];

class ContactsRepository {
  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(
      `
        INSERT INTO contacts(name, email, phone, category_id)
        VALUES($1, $2, $3, $4)
        RETURNING *
      `,
      [name, email, phone, category_id]
    );

    return row;
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      );

      resolve(updatedContact);
    });
  }

  async findAll() {
    const rows = await db.query("SELECT * FROM contacts");
    return rows;
  }

  async findById(id) {
    const [row] = await db.query("SELECT * FROM contacts where id = $1", [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query("SELECT * FROM contacts where email = $1", [
      email,
    ]);
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
