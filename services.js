const api = require("./api")
const request = require("./base")
module.exports = {
    getUserById(id){
        return request.request_get({url:api.path.getUserById,serve:api.baseUrl.mock,param:{id}})        //返回的是Promise
    }
}