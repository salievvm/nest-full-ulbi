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