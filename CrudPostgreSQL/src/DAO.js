const client = require("./DatabaseHelper");

client.connect((err) => {
  if (err) {
    console.log("No");
  } else {
    console.log("Yes");
  }
});

        console.log()
const createDatabase = async () => {
  try {
    await client.connect();
    await client.query("create database demo");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    await client.end();
  }
};

module.exports = { createDatabase };
