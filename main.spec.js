import { createApp } from 'vue'
import Hello from './hello.js'

test('', () => {
  console.log(Hello)
  const el = document.createElement('div')
  el.id = 'app'
  document.body.appendChild(el)
  const app = createApp(Hello, { msg: 'Hello world' })
  app.mount('#app')
  console.log(document.body.outerHTML)
})
