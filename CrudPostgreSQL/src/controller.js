const { createDatabase } = require("./DAO");

createDatabase().then((result) => {
  if (result) {
    console.log("Database created");
  }
});
