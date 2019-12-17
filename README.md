# http_client
主要目录及介绍

**用于客户端发送请求的二次封装**

**基于axios，更适合实际项目使用的http_client**
## api.js
用于集中配置API路径的文件，其中，`baseUrl`用于配置开发、测试、生产环境的协议、域名及端口；导出的path则是API的完整路径
## base.js
根据具体业务，用于处理请求方式，拦截的请求方法二次封装
## service
根据base和api，将所有请求进行处理，支持暴露出Promise对象的形式调用
## http_config
用于根据具体业务进行配置的文件，主要使用用途为：
1. 与后端约定的返回状态码的含义配置
2. 根据后端返回的基本信息进行部分提示的文字配置