import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Toga CLI</span>,
  project: {
    link: 'https://github.com/andrebrito16/toga-cli',
  },
  docsRepositoryBase: 'https://github.com/andrebrito16/toga-cli-docs',
  footer: {
    text: 'Toga CLI Docs',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – TogaCLI'
      }
    }
  },
}

export default config
