# tum-platform-repo
Tum Platform Repository 


  
## How To Run Nest Projects
```bash
# 1) Open New Terminal
# Go into the nest project                    (PS ....nestjs-golang-filesearch>)
$ cd src/ 

# 2) Install dependencies                        (PS ....nestjs-golang-filesearch\nestjs-server>)
$ npm install -g  @nestjs/cli
$ npm install 

# 3) Run NestJSApp                                (PS ....nestjs-golang-filesearch\nestjs-server>)
$ npm run start:dev

# 3) Run Redis and MongoDB                       (PS ....nestjs-golang-filesearch>)
$ docker-compose -f docker-compose.yml up -d  

```

## How To Generate Resource/Module/Controller/Service In Nest Projects
```bash
# 1) Open New Terminal
# Go into the nest project                    (PS ....nestjs-golang-filesearch>)
$ cd src/backend/nestjs-server 

# 2) Crud generator
$ nest g resource module-name

# 3) 
$ nest g module/controller/service user

```


## How To Use Migration
```bash
# 1) Generate migrations
# delete files in the projectName/migration
# Go into the nest project                    (PS ....nestjs-server>)
$ npm run typeorm:generate-migration --name=CreatePost

# 2) Run migrations
$ npm run typeorm:run-migrations
# tum-platform-repo
Tum Platform Repository 


  
## How To Run Nest Projects
```bash
# 1) Open New Terminal
# Go into the nest project                    (PS ....nestjs-golang-filesearch>)
$ cd src/backend/nestjs-server 

# 2) Install dependencies                        (PS ....nestjs-golang-filesearch\nestjs-server>)
$ npm install -g  @nestjs/cli
$ npm install 

# 3) Run NestJSApp                                (PS ....nestjs-golang-filesearch\nestjs-server>)
$ npm run start:dev

# 3) Run Redis and MongoDB                       (PS ....nestjs-golang-filesearch>)
$ docker-compose -f docker-compose.yml up -d  

```

## How To Generate Resource/Module/Controller/Service In Nest Projects
```bash
# 1) Open New Terminal
# Go into the nest project                    (PS ....nestjs-golang-filesearch>)
$ cd src/backend/nestjs-server 

# 2) Crud generator
$ nest g resource module-name

# 3) 
$ nest g module/controller/service user

```


## How To Use Migration
```bash
# 1) Generate migrations
# delete files in the projectName/migration
# Go into the nest project                    (PS ....nestjs-server>)
$ npm run typeorm:generate-migration --name=CreatePost

# 2) Run migrations
$ npm run typeorm:run-migrations


```