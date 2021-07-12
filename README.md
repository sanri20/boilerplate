# iEcoPro
ACI iEcoPro Project
Micro Modules for IEcoPro.

These modules compose together to help you create performant modern JS apps that you love to develop and test. These packages are developed primarily to be used on top of the stack we like best for our JS apps; Typescript for the flavor, Koa for the server, LitElement for UI, Apollo graphql and typeorm for data fetching, and Jest for tests. That said, you can mix and match as you like.
# Dev Enviroment
1. nodejs, npm
2. yarn
<!-- 3. typescript -->
4. postgres
5. docker

## Usage

The iecopro repo is managed as a monorepo that is composed of 140 npm packages.
Each package has its own `README.md` and documentation describing usage.

```
# very first time
$ yarn install
$ yarn build # build all packages
$ DEBUG=iecopro:*,typeorm:* yarn workspace @things-factory/ieco-pro run migration
$ DEBUG=iecopro:* yarn workspace @things-factory/ieco-pro run serve:dev
```

```
# after a new module package(ie. @things-factory/newbee) added
$ yarn install # make newbee package join
$ yarn workspace @things-factory/newbee build
$ DEBUG=things-factory:* yarn workspace @things-factory/ieco-pro run serve:dev
```

```
# after a dependent package(ie. @things-factory/dependa) modified
$ yarn workspace @things-factory/dependa build
$ DEBUG=iecopro:* yarn workspace @things-factory/ieco-pro run serve:dev
```

```
# run application (ie. @things-factory/ieco-pro) in production mode
$ yarn workspace @things-factory/ieco-pro build
$ yarn workspace @things-factory/ieco-pro build:client
$ yarn workspace @things-factory/ieco-pro run serve

# The way to use the config file is the same as before.
# Don't forget to give a config file to make the app run.
```

```
# publish packages that have changed since the last release
$ yarn release

# publish all packages
$ yarn release:force

# Don't forget to commit all changes before release
```

```
# dockerize application (ie. @things-factory/ieco-pro)
$ yarn workspace @things-factory/ieco-pro build
$ yarn workspace @things-factory/ieco-pro build:client
$ yarn workspace @things-factory/ieco-pro docker # build docker image
$ yarn workspace @things-factory/ieco-pro docker:push # push docker image to docker repository
```

```
# generate new application (ie. @things-factory/operato-xyz)
$ yarn generate app
  ? What should this application's name be? Ex. operato-abc > # type "operato-xyz"

# generate new module (ie. @things-factory/notification)
$ yarn generate module
  ? What should this module's name be? Ex. menu > # type "notification"

# generate new entity in a module (ie. "sms" entity in @things-factory/notification module)
$ yarn generate entity
  ? What is target package's name? Ex. biz-base, ieco-pro > # type "notification"
  ? What should this entitie's name be? Ex. company, company-ext > # type "sms"

# generate new page in a module (ie. "sms-view" page in @things-factory/notification module)
$ yarn generate page
  ? What is target package's name? Ex. biz-base, ieco-pro > # type "notification"
  ? What should this pages's name be? Ex. abc-viewer > # type "sms-view"

# generate new scene-module from scratch (ie. @things-factory/scene-random)
$ yarn generate app
  ? What should this module's name be? Ex. random > # type "scene-random"

# generate new scene-component in a module (ie. "button" component in @things-factory/scene-switch module)
$ yarn generate component
  ? What is target package's name? Ex. switch > # type "switch"
  ? What should this component's name be? Ex. button > # type "button"

# generate new container component in a module (ie. "button" container component in @things-factory/scene-switch module)
$ yarn generate container
  ? What is target package's name? Ex. switch > # type "switch"
  ? What should this component's name be? Ex. button > # type "button"

# generate new html base scene component in a module (ie. "button" html-component in @things-factory/scene-switch module)
$ yarn generate html-component
  ? What is target package's name? Ex. switch > # type "switch"
  ? What should this component's name be? Ex. button > # type "button"

# generate new data source scene component in a module (ie. "button" component in @things-factory/scene-switch module)
$ yarn generate data-source
  ? What is target package's name? Ex. switch > # type "switch"
  ? What should this component's name be? Ex. button > # type "button"

# generate new data transform scene component in a module (ie. "button" component in @things-factory/scene-switch module)
$ yarn generate data-transform
  ? What is target package's name? Ex. switch > # type "switch"
  ? What should this component's name be? Ex. button > # type "button"
```