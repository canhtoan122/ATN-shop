var DBconfigs = {
    localdb: {
        urldb : 'mongodb://localhost:27017/ExampleDB02',
        dbname : "ExampleDB02",
        dbusername : "",
        dbpassword : "",
    },

    clouddb: {
        urldb : "mongodb+srv://<username>:<password>@cluster0.9yrzf.mongodb.net/<dbname>?retryWrites=true&w=majority",
        dbname : "ExampleDB",
        dbusername : "",
        dbpassword : "",
    }

};

module.exports = DBconfigs.clouddb;