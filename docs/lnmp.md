# 服务器配置文件


### 修订历史

时间 | 版本 | 修订人 | 内容
---|---|---|---
2018-05-05 | v1.0.0 | dodo | 本地虚拟机centos最少安装后lnmp配置


## 目录

- [1.1 PHP7.0.2](#1.1)
	- [1.1.1 swoole扩展](#1.1.1)
- [1.2 Nginx1.13.12](#1.2)
	- [1.2.1 Nginx Auth Basic](#1.2.1)
- [1.3 MySQL5.6.22](#1.3)
	- [1.3.1 同一服务器多个MySQL实例](#1.3.1)
	- [1.3.2 MySQL主从复制](#1.3.2) TODO:互为主从实践/从机切换为主的操作
- [1.4 Redis](#1.4)

```shell
# 系统版本
[root@iZwz9380y7iwd3pobeca5bZ ~]# cat /etc/redhat-release
CentOS release 6.9 (Final)
[root@iZwz9380y7iwd3pobeca5bZ ~]# uname -a
Linux iZwz9380y7iwd3pobeca5bZ 2.6.32-696.16.1.el6.x86_64 #1 SMP Wed Nov 15 16:51:15 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
```


```shell
# 查看编译参数
/usr/local/php/bin/php -i |grep configure
/usr/local/nginx/sbin/nginx -V
cat "/usr/local/mysql/bin/mysqlbug" | grep configure
```

```shell
# 配置文件路径
/usr/local/php/bin/php --ini
echo '<?php phpinfo(); ?>' | /usr/local/php/bin/php 2>&1 | grep php.ini # 推荐
whereis my.cnf # 推荐
find / -name my.cnf
mysql --help | grep my.cnf
/usr/local/opt/nginx/bin/nginx -t
```


```shell
# 初始环境目录
mkdir -p /var/www/html
mkdir -p /usr/local
mkdir -p /opt/soft
mkdir -p /data/mysql/mysqldata
mkdir -p /data/server/shell
mkdir -p /data/backup/mysql
```

```shell
/var/www/html/
            phpMyAdmin      <-----------------phpMyAdmin
            your-project    <-----------------项目
            your-project2

/usr/local/
            mysql           <-----------------自编译软件
            nginx

/opt/
    soft                    <-----------------软件资料


/data/
    mysql/mysqldata         <-----------------数据库文件
    server/shell            <-----------------shell脚本
    backup/mysql            <-----------------mysql备份
```

