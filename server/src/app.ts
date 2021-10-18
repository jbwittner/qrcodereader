import express from "express";
import fs from "fs";

var dir = './log';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const addReaderData = (data: String) => {
  const content = new Date().toISOString() + ";" + data.toString() + "\n";
  fs.writeFile("log/file.log", content, { flag: "a+" }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Add data");
    }
    return;
  });
};

const initWebServer = () => {
  const app = express();
  const port = 3150;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post("/dataRead", (req, res) => {
    if (req.body.dataRead != undefined) {
      addReaderData(req.body.dataRead);
    }
    res.sendStatus(200);
  });

  app.use("/", express.static("static"));

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
};

initWebServer();
