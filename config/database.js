const mongoose = require('mongoose') 

const url = 'mongodb://localhost:27017/ravent'
const options = {
    // useMongoClient:true (不再需要)
}
mongoose.Promise = global.Promise

mongoose
    .connect(url,options)
    .then(db=>console.log("数据库链接成功！"))
    .catch(error => console.log("数据库链接失败!"))

module.exports = mongoose