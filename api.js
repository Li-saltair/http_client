module.exports.baseUrl = {
    mock:"http://rap2api.taobao.org/app/mock/",
    test:"192.168.92.9:8080",
    alpha:"http://rap2api.taobao.org/alpha",
    beta:"http://rap2api.taobao.org/beta",
    prod:"you production baseurl",
}
module.exports.path = function (baseurl = ""){
    return {
        getUserById:baseurl+"/user/id=",
        getUsersByName:baseurl+"/user/name=",
        getUserByWeChatId:baseurl+"user/wechatid="
        //ect
    }
}