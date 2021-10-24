const productsService = require('../services/productService');

const create = async (req, res) => {
  const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
  const { err, product } = await productsService.create(marca, modelo, versao, ano, quilometragem, observacao);
  if (err) return res.status(422).json({ err });
  return res.status(201).json(product);
};

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json({ products });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);
  if (!product) {
    return res.status(422).json({ 
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      } });
  }
  return res.status(200).json(product);
};

const editById = async (req, res) => {
  const { id } = req.params;
  const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
  const { err, product } = await productsService.editById(id, marca, modelo, versao, ano, quilometragem, observacao);
  if (err) return res.status(200).json({ err });
  return res.status(200).json(product);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);
  if (!product) {
    return res.status(422).json({ err:
      { code: 'invalid_data', message: 'Wrong id format' } });
  }
  await productsService.deleteById(id);
  return res.status(200).json(product);
};

module.exports = {
  create,
  getAll,
  getById,
  editById,
  deleteById,
};