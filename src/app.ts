import express from 'express'
var bodyParser = require("body-parser");
import { VCardDTO } from './type'

const app = express()
const port = 3150

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addCard', (req, res) => {
  const data = req.body.data;
  console.log("data")
  console.log(data)
  console.log("data")
  res.send(req.body)
})

app.use('/static', express.static('static'))

app.listen(port, () => {
    let toto: VCardDTO;
  console.log(`Example app listening at http://localhost:${port}`)
})