let base = require("./base")
base.request_get({url:"/115893/user"}).then(r=>{console.log(r.data)})