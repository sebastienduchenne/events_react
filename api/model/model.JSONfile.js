var fs = require("fs");

let events;
fs.readFile( "./events.json", 'utf8', function (err, data) {
    events = data;
});

exports.list = (req, res) => {
    console.log("exports.list")
    res.status(200).send(events);
    //res.status(200).send("events");
};

exports.getById = (req, res) => {
    console.log("exports.getById")

    //console.log(events)

    res.status(200).send("getById");
};

exports.create = (req, res) => {
    console.log("exports.create")

    res.status(200).send("create");
};

exports.updateById = (req, res) => {
    console.log("exports.updateById")

    res.status(200).send("update");
};

exports.removeById = (req, res) => {
    console.log("exports.removeById")

    res.status(200).send("remove");
};
