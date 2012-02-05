/***
 * 如果开启了mongoDB,将下面代码注释去掉，
 * 并将dbUserName, dbPassword和dbName都
 * 替换成分配得到的值。即可查看 mongoDB
 * 测试程序。否则则开启hello world程序。
 ***/
var mongo = require("mongoskin");
var db = {
    "username": "7kz3tli9otwqr",
    "password": "bv8nbo7wbm4",
    "database": "ZG0DbmWHMVdd"
};
var db_url = exports.db_url = db.username + ":" + db.password + "@127.0.0.1:20088/" + db.database;
exports.db = mongo.db(db_url);

