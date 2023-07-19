# 安装docker并运行
安装在c  
代码在 d:/code  
前提--安装win下的wsl   
Bios 支持虚拟化  
安装内核 `wsl --install`

## 配置环境

## 使用
`docker -v`  
`docker run`
镜像image   
dockerHub公共源  
`docker pull xxx`  
- `docker pull python` 
> 经典版python：内置的东西很少（轻量）+ 会受阻碍  
`docker run -it python bash`  
- 持续运行进程
- 进入Linux操作doc
- 输入Python进入Python环境  
### docker-compose
配置物理组  
- ports  宿主：compose
- volumes 映射外部代码   
- `docker compose up -d` 服务启动
- `docker compose down`  卸载服务

jupyterlab
两个配置文件 d:/  
> 发布镜像  
Dockerfile  配置文件-前提  
`docker build -t myimage202307 .`  发布镜像
## 注意
一个容器一个进程=>相互隔离

