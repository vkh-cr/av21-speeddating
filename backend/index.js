const { v4: uuidv4 } = require('uuid');
const express = require('express');
const formidable = require('formidable');

const cors = require('cors')
const fs = require('fs')

const DB_URL = 'mongodb://localhost:27017/av21speeddating'
const DB_NAME = 'users'
client = require('mongodb').MongoClient


const app = express();
app.use(cors())
app.use(express.static('public'));

if (!fs.existsSync(`${__dirname}/public/users/`)) {
  fs.mkdirSync(`${__dirname}/public/`, (err) => {
    if (err) throw err
  })
  fs.mkdirSync(`${__dirname}/public/users/`, (err) => {
    if (err) throw err
  })
}

app.get('/', (req, res) => {
  res.send(`
    <h2>Hello from backend</h2>
  `);
});

app.get('/users', (req, res) => {
  client.connect(DB_URL, function (err, client) {
    if (err) throw err

    var db = client.db(DB_NAME)
    db.collection("users").find({}).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      client.close();
      res.json(result)
    });
  })
})

app.post('/register', (req, res, next) => {
  const UUID = uuidv4().split('-')[0]
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    const user = JSON.parse(fields.personalInfo)
    const oldPath = files.image.path;
    const newPath = `${__dirname}/public/users/${UUID}.${files.image.type.split('/')[1]}`

    // add another information
    user.imagePath = `${UUID}.${files.image.type.split('/')[1]}`
    user.id = uuidv4().split('-')[0]


    var rawData = fs.readFileSync(oldPath)

    fs.writeFile(newPath, rawData, function (err) {
      if (err) console.log(err)
    })

    client.connect(DB_URL, function (err, client) {
      if (err) throw err

      var db = client.db(DB_NAME)
      db.collection("users").insertOne(user, function (err, result) {
        if (err) {
          res.send(err)
        }
        console.log(`Inserted user ${user.id} - ${user.name} ${user.surname}`);
        client.close();
        res.json(user)
      });
    })
  });
});

app.listen(3200, () => {
  console.log('Server listening on http://localhost:3200 ...');
});