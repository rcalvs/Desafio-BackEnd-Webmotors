const database = require('../models/connection');

const getAll = () => {
  database.select("*").table("tb_AnuncioWebmotors").then(products =>{
    response.json(products);
    return { products };
  }).catch(err =>{
    console.log(err);
    return err;
  })
};

const create = (marca, modelo, versao, ano, quilometragem, observacao) => {
  database.insert({marca, modelo, versao, ano, quilometragem, observacao})
    .table("tb_AnuncioWebmotors").then(product =>{
      response.json(product);
      return { product };
    }).catch(err =>{
      console.log(err);
      return err;
    })
};

const getById = (id) => {
  database.select("*").table("tb_AnuncioWebmotors").where({id:id}).then(product =>{
    response.json(product);
    return { product };
  }).catch(err =>{
    console.log(err);
    return err;
  })
};

const editById = (id, marca, modelo, versao, ano, quilometragem, observacao) => {
  database.where({id:id})
  .update({marca:marca, modelo:modelo, versao:versao, ano:ano, quilometragem:quilometragem, observacao:observacao})
  .table("tb_AnuncioWebmotors").then(product =>{
    response.json(product);
    return { product };
  }).catch(err =>{
    console.log(err);
    return err;
  });
};

const deleteById = (id) => {
  database.where({id:id}).del().table("tb_AnuncioWebmotors").then(data =>{
    response.json({message: "Successfully deleted"});
  }).catch(err =>{
    console.log(err);
    return err;
  });
};

module.exports = {
  create,
  getAll,
  getById,
  editById,
  deleteById,
};