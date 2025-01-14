const fs = require("node:fs").promises;
const path = require("node:path");

/*
 * Skomentuj i zapisz wartość
 * const contactsPath = ;
 */

const contactsPath = "./db/contacts.json";
// TODO: udokumentuj każdą funkcję
function listContacts() {
  const file = fs.readFile(path.resolve(contactsPath));
  file.then((content) => {
    const fileStr = content.toString();
    console.table(JSON.parse(fileStr));
  });
}

function getContactById(contactId) {
  const file = fs.readFile(path.resolve(contactsPath));
  file.then((content) => {
    const fileStr = content.toString();
    const result = JSON.parse(fileStr);
    console.table(result.find((contact) => contact.id == contactId));
  });
}

function removeContact(contactId) {
  const file = fs.readFile(path.resolve(contactsPath));
  file.then((content) => {
    const fileStr = content.toString();
    const result = JSON.parse(fileStr);
    const afterDelete = result.filter((contact) => contact.id !== contactId);
    fs.writeFile(path.resolve(contactsPath), JSON.stringify(afterDelete)).then(() => {
        console.log("Zapis do pliku zakończony powodzeniem.".green);
    })
  });
}

function addContact(name, email, phone) {
  // ...twój kod
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
