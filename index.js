const contacts = require("./contacts");
// const argv = require("yargs").argv;
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
invokeAction({ action: "list" });
