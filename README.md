# Things factory boilerplate

> Start your own project from the beginning based on `Things-Factory Boilerplate` <br>

## ___What you need to do...___

---
### ___To setup your own project___
1. 이 Repository를 당신의 `private` Repository로 [`Fork`](https://docs.github.com/en/get-started/quickstart/fork-a-repo) 하세요.
1. `Fork` 받은 Repository를 [`Clone`](https://github.com/git-guides/git-clone) 받으세요.
1. 아래의 명령을 통해 필요한 디펜던시를 설치하세요

    ```sh
    # 터미널을 통해 Clone 받은 Repository가 있는 디렉토리로 이동합니다.
    $ cd $WHERE_YOUR_REPOSITORY_LOCATED

    # `yarn`을 이용해 필요한 디펜던시를 설치 합니다.
    $ yarn install 
    ```
    
1. 아래의 명령을 통해 `Application module`을 생성 합니다.

    ```sh
    $ yarn generate

    yarn run v1.22.10
    $ plop
    ? [PLOP] Please choose a generator. (Use arrow keys)
    ❯ app - Create a new application package from scratch # 키보드를 이용해 `app`을 선택하고 `Enter`
      brand - Create a new application brand package from scratch 
      module - Create a new module from scratch 
      migration - Generate migration from scratch 
      entity - Generate entity from scratch 
      page - Generate client page from scratch 
      scene-module - Create a new scene-module from scratch 
    (Move up and down to reveal more choices)
    ```

    이후 메시지를 확인하고 필요한 모듈 정보를 입력합니다. ___(ex. 모듈 명칭, 모듈 설명)___

    > 💡 __Tip__ <br>
    > `shorthand` 명령어 <br>
    > $ `yarn generate app` 

---

### ___To add dependencies___

- Things-factory framework는 이미 개발된 다양한 모듈을 가지고 있습니다.
- 필요한 모듈을 참조하거나 직접 개발하여 `Application`을 구성 할 수 있습니다.

  > 본 프로젝트는 `lerna`를 이용한 `monorepo`로 구성 되어 있기 때문에 모듈을 설치하기 위해 설치하려는 대상 모듈을 명시해야 합니다. <br>

  ```sh
  # YOUR_APPLICATION 모듈에 `@things-factory/layout-ui`를 추가하는 명령어
  $ yarn workspace @things-factory/YOUR_APPLICATION add @things-factory/layout-ui
  ```

- 새로운 모듈을 `직접 개발`하여 사용할 경우에는 상기 명령을 이용 할 수 없습니다.

  > 💡 __Tip__ <br>
  > 새로 만들어진 모듈이 `npm`에 `publishing` 되기 전 까지는 `npm`을 통해 해당 모듈을 찾을 수 없기 때문입니다. <br>
  > 새롭게 개발한 모듈이 단 한번이라도 `npm`에 publishing 되었다면 `yarn`이 제공하는 커맨드를 통해 디펜던시를 추가 할 수 있습니다.

- `npm`에 `publishing` 되지 않은 모듈을 `생성` & `사용` 하기 위해서는 아래의 두가지 작업을 수행해야 합니다.

  1. 모듈 생성
  1. package.json 수정

1. ___모듈 생성___

    모듈 생성은 `To setup your own project`에서 다룬 내용과 동일한 명령어를 사용합니다. <br>
    다만, `app` 모듈을 선택하는 것이 아닌 `module`을 선택합니다.

    ```sh
    $ yarn generate
    
    yarn run v1.22.10
    $ plop
    ? [PLOP] Please choose a generator. 
      app - Create a new application package from scratch 
      brand - Create a new application brand package from scratch 
    ❯ module - Create a new module from scratch 
      migration - Generate migration from scratch 
      entity - Generate entity from scratch 
      page - Generate client page from scratch 
      scene-module - Create a new scene-module from scratch 
    (Move up and down to reveal more choices)
    ```

    > 💡 __Tip__ <br>
    > `shorthand` 명령어 <br>
    > $ `yarn generate module` 

1. ___package.json 수정___

    설명을 돕기 위해 새로 추가된 모듈을 `자식 모듈`, `자식 모듈`을 사용하려는 모듈을 `부모 모듈`이라 지칭하겠습니다. <br>
    먼저 `자식 모듈`의 `package.json`을 열어 `name`, `version` 프로퍼티를 확인 합니다.

    > 💡 __Tip__ <br>
    > 본 리파지토리에서 작업이 이루어지는 모든 모듈은 `packages` 디렉토리 아래에 생성 됩니다.

    확인한 `name` & `version` 프로퍼티를 아래의 포멧으로 조합 합니다.

    ```sh
    ${name}@^${version}
    ```

    > 💡 __Tip__ <br>
    > 필요에 따라 version 정보를 수정합니다. ([Semantic versioning](https://semver.org/lang/ko/))

---
### ___To insert initial data___ 
- `Things-Factory`에서 제공하는 모듈들은 정상적으로 동작하기 위해 경우에 따라 기초 데이터를 필요로 합니다.
- 필요한 기초데이터는 각 모듈에 독립적으로 정의되어 있으며
- 모듈을 사용하는 `Application`에서 아래의 명령을 통해 기초 데이터를 개발환경 데이터베이스에 주입 할 수 있습니다.
    
  ```sh
  $ yarn migration
  ```

  > 💡 __Tip__ <br>
  > `Application` 모듈은 별도의 `database` 연결 설정을 하지 않을 경우 [SQLite](https://www.sqlite.org/index.html)를 기본 데이터베이스로 사용 합니다. <br>
  > 다시말해, 데이터베이스 설정 없이도 초기 개발환경을 구성하는 것이 가능합니다.
___

### ___To start your application___
- `Application`을 실행하기 위해 터미널을 열고 아래의 명령어를 입력 합니다.

  ```sh
  $ yarn workspace @things-factory/YOUR_APP_NAME serve:dev
  ```
  > 💡 __Tip__ <br>
  > `Application` 실행시 `DEBUG=things-factory:*` 옵션을 추가하여 `Debug` 로그를 출력할 수 있습니다. <br>
  > ex. `DEBUG=things-factory:* yarn workspace @things-factory/YOUR_APP_NAME run serve:dev` <br>
  > 보다 상세한 사용법은 [DEBUG](https://www.npmjs.com/package/debug)에서 확인하세요.