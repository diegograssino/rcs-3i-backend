const express = require('express');
const app = express();

require('dotenv').config();
console.log(process.env.PORT); // remove this after you've confirmed it is working

app.use(express.json());

const PORT = process.env.PORT || 4000;
const MOCK = [
  { id: '1', name: 'Roberto', apellido: 'Sanchez' },
  { id: '2', name: 'Roberto2', apellido: 'Sanchez2' },
];

app.get('/products', (req, res) => {
  res.status(200).json(MOCK);
});

app.get('/product/:id', (req, res) => {
  const { id } = req.params;
  const robertoFiltered = MOCK.find(r => r.id === id);
  if (robertoFiltered) {
    res.status(200).send(robertoFiltered);
  } else {
    res.status(404).send({});
  }
});

app
  .route('/test')
  .get((req, res) => {
    res.send('👍');
  })
  .post((res, req) => {
    req.send(res.body);
  });

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
