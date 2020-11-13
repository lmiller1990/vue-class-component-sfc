This repo is a minimal example of how to compile a SFC (`.vue` file) to something that can be used by tools like Jest. This specific example uses vue-class-component, since I was having trouble getting vue-jest to work with it (working now).

1. `yarn install`
2. `yarn ts-node index.ts` to compile `hello.vue` to a es6 module (I did it already, `hello.js`, take a look. Am I doing something wrong?)
3. `yarn jest` to run the tests.

