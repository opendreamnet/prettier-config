import type { Config } from 'prettier'

const config: Config = {
  useTabs: false,
  semi: false,
  singleQuote: true,
  singleAttributePerLine: true,
  bracketSameLine: true,
  printWidth: 80,
  plugins: [
    '@prettier/plugin-oxc'
  ]
}

export default config