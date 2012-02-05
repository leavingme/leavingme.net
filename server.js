var http = require('http');
var url = require('url');
var db = require('./config').db;
function start(route, handle){
    function onRequst(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');
        
        route(handle, pathname);
        
        response.writeHead(200, {
            "Content-Type": "text/html;charset=utf8"
        });
        response.write("hello,cnode app engine!");
        if (db) {
            //testMongoDB(response);
        }
        response.end();
    }
    http.createServer(onRequst).listen(80);
    console.log("Server has started.");
}

exports.start = start;

/*** 
 * mongoDB测试示例函数。如果已经开启mongoDB，请先去config.js修改填入数据库名称用户名和密码。
 ***/
function testMongoDB(res){
    //生成collection对象
    var testMongo = db.collection("testMongo");
    console.log("testMongo");
    //mongoDB存数据
    testMongo.save({
        title: "welcome",
        words: "欢迎来到CNAE的世界。这条欢迎语通过mongoDB发出。"
    }, function(err){
        if (err) {
            console.log(err.toString());
            res.writeo(err.toString());
        } else {
            //查找数据库
            testMongo.findOne({
                title: "welcome"
            }, function(err, data){
                if (err) {
                    console.log(err.toString());
                    res.write(err.toString());
                } else {
                    res.write(data.words);
                    //删除数据
                    testMongo.remove({
                        title: "welcome"
                    }, function(){
                    });
                    
                }
            });
        }
    });
}

