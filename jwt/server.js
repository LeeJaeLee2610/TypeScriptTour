import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const books = [
  { id: 1, name: "Chi Pheo", author: "ABC" },
  { id: 2, name: "Chien tranh va Hoa binh", author: "DEF" },
];

app.get("/", authenToken, (req, res) => {
  res.send({ status: "OK", data: books });
});

function authenToken(req, res, next) {
  const authorizationHeader = req.headers["authorization"];
  //Beaer [token]
  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    console.log(data);
    if (err) res.sendStatus(403);
    next();
  });
}

app.listen(3030, () => {
  console.log(`port 3030`);
});
