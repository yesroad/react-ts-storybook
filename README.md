# React + Typescript + Storybook

## npm

[npm 저장소 링크](https://www.npmjs.com/package/yesroad-npm-storybook)

> npm repository
```json
  $ https://www.npmjs.com/package/yesroad-npm-storybook
```

> npm install
```json
  $ npm i yesroad-npm-storybook
```

---
## eslint + pritter

<br/>

> 필수 확장프로그램
```json
  $ eslint
  $ prettier
```

> eslint 설정 추가
```json
  # ESLint확장을 설치후 settings.json 파일 내부에

  "eslint.validate": [
      "typescript",
      "typescriptreact"      
  ],
```

>하나의 파일만 검사 방법
```json
  # eslint
  $ npx eslint {파일경로}

  # eslint fix
  $ npx eslint {파일경로} -- fix

  // prettier (Format Document 옵션이 prettier로 설정되있어야한다.)
  $ fn + f1 -> Format Document 검색 후 선택
```

> eslint 명령어
```json
  # eslint + prettier 검사 명령어 (모든 파일 적용)

  $ npm run prettier // prettier 적용
  $ npm run lint // eslint 검사
  $ npm run lint:fix // eslint 검사후 변경 가능한 내용 적용
```
