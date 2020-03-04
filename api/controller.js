const model = require('./model/model.JSONfile');
//const model = require('./model/model.mySQL');

exports.list = (req, res) => {
    console.log("exports.list")
    model.list(req, res)
};

exports.getById = (req, res) => {
    console.log("exports.getById")
    model.getById(req, res)
};

exports.create = (req, res) => {
    console.log("exports.create")
    model.create(req, res)
};

exports.updateById = (req, res) => {
    console.log("exports.updateById")
    model.updateById(req, res)
};

exports.removeById = (req, res) => {
    console.log("exports.removeById")
    model.removeById(req, res)
};
