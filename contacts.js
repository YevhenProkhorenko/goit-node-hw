const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}
function getContactById(contactId) {
  const contacts = listContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
}

function addContact({ name, email, phone }) {
  const contacts = listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
};
