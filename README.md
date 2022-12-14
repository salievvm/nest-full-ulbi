# Полный курс по Nest.JS

## Описание архитектуры Nest.JS

Создаем файл main.ts в котором слушаем необходимый порт
Создаем главный модуль app.module.ts в который передаем параметры:
### providers
Любые сервисы, которые продекорированы через Injectable. Содержат тонкую логику.
### controllers
Интерфейсы для взаимодействия через АПИ. Могут использовать сервисы. Чтобы использовать сервис необходимо сделать ту самую инъекцию (Dependency injection) через конструктор.
### imports
Когда мы хотим импортировать внешние модули в текущий модуль.
### modules
Модули системы, которые осуществляют взаимодействие `imports, exports, controllers, providers`

## Установка sequalize

https://www.npmjs.com/package/@nestjs/sequelize 

(https://progressivecoder.com/how-to-setup-a-nestjs-sequelize-postgresql-integration/ Alterenate Link)

    npm i --save @nestjs/sequelize sequelize-typescript sequelize

https://sequelize.org/docs/v6/getting-started/

    npm install --save pg pg-hstore

    npm i --save-dev @types/sequelize

## Установка PostgreSQL

https://www.postgresql.org/download/

Также необходимо установить pgAdmin

## Автогенерация файлов проекта

nest generate module | service | controller users

## Кладем соединение с БД в env
Устанавливаем пакет для обращения к конфигам

    npm i @nestjs/config --save

Устанавливаем пакет для объявления переменных в момент запуска команд

    npm i cross-env --save

Прописываем настройки npm start в package.json

## Документирование rest-full-api

Устанавливаем swagger 

    $ npm i @nestjs/swagger swagger-ui-express --save

Прописываем в контроллере `users.controller.ts` нужной модели декораторы:

    @ApiTags('Пользователи') // для самого контроллера
    @ApiOperation({summary: 'Создание пользователя'}) // Для метода - название
    @ApiResponse({status: 200, type: User}) // Для метода - получение статуса и интерфейса

Прописываем в модели `users.model.ts` для каждого столбца таблицы:
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'}) // Пример и описание

Прописываем в dto `create-user.dto.ts` тоже самое:
    
    @ApiProperty({example: 'example@mail.com', description: 'Email'})

## Делаем Import стороннего модуля вместе с сервисом

### Делается это потому, что в `user.service` нам нужен только сервис `roles.service` чтобы при создании пользователя присвоить ему группу.


В файле `users.module.ts` в imports указываем просто `RolesModule`

В файле `roles.module.ts` в exports указываем `RolesService`

Теперь модуль RolesModule будет экспортироваться вместе со своим сервисом