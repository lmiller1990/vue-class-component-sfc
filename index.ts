require('jsdom-global')()

import fs from 'fs'
import * as SFC from '@vue/compiler-sfc'
import { h, createApp } from 'vue'
import TS from 'typescript'

const sfc = fs.readFileSync('./hello.vue', 'utf8')
console.log(
  sfc
)

const data = SFC.parse(sfc)

const { code: templateCode } = SFC.compileTemplate({
  source: data.descriptor.template!.content,
  filename: 'hello.vue'
})

const tsJs = TS.transpileModule(data.descriptor.script!.content, { compilerOptions: { module: 5 }})

fs.writeFileSync('hello.js',
  tsJs.outputText.replace('export default Hello;', '') + 
    templateCode + 
    '\n' + 
    'export default {...Hello, render};'
  )
