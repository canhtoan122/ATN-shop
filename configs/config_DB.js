var DBconfigs = {
    localdb: {
        urldb : 'mongodb://localhost:27017/ExampleDB02',
        dbname : "ExampleDB02",
        dbusername : "",
        dbpassword : "",
    },

    clouddb: {
        urldb : "mongodb+srv://Toan123:Toan123@cluster0.9yrzf.mongodb.net/ExampleDB<?retryWrites=true&w=majority",
        dbname : "ExampleDB",
        dbusername : "",
        dbpassword : "",
    }

};

module.exports = DBconfigs.clouddb;