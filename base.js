//import api from './api'
//import axios from 'axios'
const api = require("./api")
const axios = require("axios")
const httpClient = axios
//基础方法

const postHeaders = {
  header: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
const fileHeaders = {
    header:{
        'Content-Type':'multipart/form-data'
    }
}
const putHeaders = {
    header:{
        'Content-Type':'application/json'
    }
}
const otherConfig = {
  baseURL: api.baseUrl.mock, //配置使用的url即可
  timeout: 6000,
  //cors
  withCredentials: false,
  validateStatus: function(status) {
    return (status >= 200 && status < 300) || status == 304 // default
  },
  //配置cors的地址
//   proxy: {
//     host: '127.0.0.1',
//     port: 9000,
//     auth: {
//       username: 'mikeymike',
//       password: 'rapunz3l'
//     }
//   }
}

//Interceptors
httpClient.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor,主要用来拦截响应中约定的异常
httpClient.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

const client= {
  request_get: function({ url, data = {} }) {
    return httpClient.get(url, {
      params: data,
      ...otherConfig
    })
  },
  request_post: function({ url, data = {} }) {
    return httpClient.post(url, {
      data,
      ...otherConfig,
      ...postHeaders
    })
  },
  request_put: function({ url, data = {} }) {
    return httpClient.put(url, {
      data,
      ...otherConfig,
      ...putHeaders
    })
  },
  request_delete: function({ url }) {
      return httpClient.delete(url)
  },
  request_file: function({url,data={}}){
    return httpClient.post(url,{
        data,
        ...otherConfig,
        ...fileHeaders
    })
  }
  //拦截
}
// let requestMap = {
//     get: client.request_get,
//     post: client.request_post,
//     delete: client.request_delete,
//     put: client.request_put
//   }
//   //默认get，其他的调用上述方法即可
//   function request({ url, method = 'get', option }) {
//     return requestMap[method](url, option)
//   }
module.exports = client

