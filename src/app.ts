import express from "express";
import bodyParser from "body-parser";
import { VCardDTO } from "./type";
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "vcardscanner",
  "vcardscanner_user",
  "VCardScannerPass2021",
  {
    host: "localhost",
    port: 6000,
    dialect: "mysql",
  }
);

class VCard extends Model {}

VCard.init(
  {
    version: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "VCard",
  }
);

const initDataBase = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
      initWebServer();
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
};

const initWebServer = () => {
  const app = express();
  const port = 3150;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/addCard", (req, res) => {
    if (req.body != undefined) {
      const data: VCardDTO = req.body;
      VCard.create({
        version: data.version,
        name: data.n,
      }).finally(() => res.send(req.body));
    }
  });

  app.use("/static", express.static("static"));

  app.listen(port, () => {
    let toto: VCardDTO;
    console.log(`App listening at http://localhost:${port}`);
  });
};

initDataBase();
