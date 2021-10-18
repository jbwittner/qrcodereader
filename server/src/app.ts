import express from "express";
import { VCardDTO } from "./type";
import fs from 'fs'

const initWebServer = () => {
  const app = express();
  const port = 3150;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post("/addCard", (req, res) => {
    if (req.body != undefined) {
      const data: VCardDTO = req.body;
      console.log(data)
    }
  });

  app.get("/testGet", (req, res) => {
    res.json("toutou")
  })

  app.use("/", express.static("static"));

  app.listen(port, () => {
    let toto: VCardDTO;
    console.log(`App listening at http://localhost:${port}`);
  });
};

initWebServer();

const content = 'Some content! - ' + Date.now() + "\n"

fs.writeFile('file.log', content, { flag: 'a+' }, err => {
  console.error(err)
  return})

