const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = '4000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

const productsController = require('./controllers/productController');

app.get('/products', productsController.getAll);
app.get('/products/:id', productsController.getById);
app.put('/products/:id', productsController.editById);
app.delete('/products/:id', productsController.deleteById);
app.post('/products', productsController.create);

app.listen(PORT, () => {
  console.log('Online');
});
