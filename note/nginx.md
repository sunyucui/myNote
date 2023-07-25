# nginx
- 拉取  
`docker pull nginx  `
- 创建挂载目录（创建本地的Nginx目录）  
- 从容器中复制nginx.conf及conf.d文件夹  
- 删除原nginx容器，改用挂载方式启动
- 修改配置

- `docker run --name demo -d -p 9000:9000 -p 10000:10000 nginx`
-` docker exec -it demo /bin/bash`
  - 进入到服务器dos
- `/etc/nginx/conf.d`
- `nginx.conf `根配置  http服务加载子服务include /*.conf
  - user 用户身份
  - error_log 日志
  - pid 进程号
  - http服务配置块
- 子配置 server块
  - listen 监听外部的端口 进行重定向
  - location 服务下的地址
- ` nginx -s reload` 重新启动 
- `nginx -t` 进行语法检查





## 应用

- 前后端分离
- http跨域cors
  - B/S option预请求 不同源：协议+端口+域名 
  - 实际是通知运维来做
  - 后端响应头添加`Accecc-Control-Allow-Orign "$http_orign"`
  - 项目中的wos 静态配置
- 301 永久跳转
  - 用于旧网站改版跳转新网站
  - SEO推荐使用301
- 302 临时跳转
  - 用于404的跳转
