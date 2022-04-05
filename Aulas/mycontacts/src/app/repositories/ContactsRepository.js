const db = require("../../database");
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

  async update(id, { name, email, phone, category_id }) {
    const [row] = await db.query(
      `UPDATE contacts
      SET name = $1, email = $2, phone = $3
      WHERE id = $4
      RETURNING *
    `,
      [name, email, phone, id]
    );

    return row;
  }

  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await db.query(
      `SELECT contacts.*,
        categories.id as category_id, categories.name as category_name
      FROM contacts
      LEFT JOIN categories
      ON contacts.category_id = categories.id
      ORDER BY contacts.name ${direction}`
    );
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT contacts.*,
        categories.id as category_id, categories.name as category_name
      FROM contacts
      LEFT JOIN categories
      ON contacts.category_id = categories.id
      where contacts.id = $1
    `,
      [id]
    );
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query("SELECT * FROM contacts where email = $1", [
      email,
    ]);
    return row;
  }

  async delete(id) {
    const row = await db.query("DELETE FROM contacts WHERE id = $1", [id]);
    return row;
  }
}

module.exports = new ContactsRepository();
