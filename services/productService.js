const productsModel = require('../models/productModel');

const validate = (marca, modelo, versao, ano, quilometragem) => {

  if (typeof (marca) === 'string') {
    return {
      err: {
        code: 'invalid_data', message: '"marca" must be a string' } };
  }
  if (typeof (modelo) === 'string') {
    return {
      err: {
        code: 'invalid_data', message: '"modelo" must be a string' } };
  }
  if (typeof (versao) === 'string') {
    return {
      err: {
        code: 'invalid_data', message: '"versao" must be a string' } };
  }
  if (typeof (ano) === 'number') {
    return {
      err: {
        code: 'invalid_data', message: '"ano" must be a number' } };
  }
  if (typeof (quilometragem) === 'number') {
    return {
      err: {
        code: 'invalid_data', message: '"quilometragem" must be a number' } };
  }
};

const create = async (marca, modelo, versao, ano, quilometragem) => {
  const result = await validate(marca, modelo, versao, ano, quilometragem);
  if (result) {
    return result;
  }

  const product = await productsModel.create(marca, modelo, versao, ano, quilometragem);
  return { product };
};

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  return product;
};

const editById = async (id, marca, modelo, versao, ano, quilometragem) => {
  const result = await validate(marca, modelo, versao, ano, quilometragem);
  if (result) {
    return result;
  }

  const product = await productsModel.editById(id, marca, modelo, versao, ano, quilometragem);
  return { product };
};

const deleteById = async (id) => {
  const product = await productsModel.deleteById(id);
  return product;
};

module.exports = {
  create,
  getAll,
  getById,
  editById,
  deleteById,
};