## Running

1. `yarn install`
2. `yarn ts-node index.ts` to compile `hello.vue` to a es6 module (I did it already, `hello.js`, take a look. Am I doing something wrong?)
3. `yarn jest` to run the tests.

Always get:

```
[Vue warn]: Property "msg" was accessed during render but is not defined on instance.
      at <App msg="Hello world" >
```
