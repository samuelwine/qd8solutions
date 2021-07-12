---
templateKey: blog-post
title: Docker Commands
date: 2021-07-11T17:53:10.000Z
featuredpost: true
featuredimage: 
description: 
tags:
  - Docker
  - container
---

##Docker Commands

```
docker ps
``` 
lists all running containers

```
docker exec
```
executes commands within the containers

so for example, to open a bash console within the container:
```
docker exec -it <id of container> bash
```



