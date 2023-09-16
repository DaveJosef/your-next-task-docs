import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config = {
  logo: <strong>Your Next Task</strong>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Your Next Task'
    }
  },
  navigation: {
    prev: true,
    next: true,
  },
  search: {
    placeholder: () => {
      const { locale } = useRouter();
      const placeholder = locale === "pt" ? "O que você está procurando?" : "What are you searching for?"
      return placeholder;
    },
    emptyResult: () => {
      const { locale } = useRouter();
      return (
        <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">{
          locale === "pt" ? "Nenhum resultado encontrado." : "No result found."
        }</span>
      )
    },
  },
  project: {
    link: 'https://github.com/davejosef/your-next-app-docs',
  },
  docsRepositoryBase: 'https://github.com/davejosef/your-next-task-docs/blob/main',
  footer: {
    text: () => {
      const { locale } = useRouter();
      return (
        <>
          {locale === "pt" ? 'Documentação Your Next Task criada com ❤ por Dave' : 'Your Next Task Documentation created with ❤ by Dave'}
        </>
      )
    },
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'pt', text: 'Português' },
  ],
  editLink: {
    component: () => {
      const { locale } = useRouter();
      return (<a className="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50" href="https://github.com/davejosef/your-next-task-docs/blob/main/pages/index.en.mdx">{locale === "pt" ? 'Editar página' : 'Edit this page'}</a>)
    },
  },
  feedback: {
    content: () => {
      const { locale } = useRouter();
      return (
        <>{ locale === "pt" ? 'Questões? Dar Feedback →' : 'Question? Give us feedback →' }</>
      )
    }
  },
  primaryHue: 172,
  themeSwitch: {
    useOptions: () => {
      const { locale } = useRouter();
      return {
        dark: locale === 'pt' ? 'Escuro' : 'Dark',
        light: locale === 'pt' ? 'Claro' : 'Light',
        system: locale === 'pt' ? 'Sistema' : 'System',
      };
    },
  },
  faviconGlyph: '✔'
} as DocsThemeConfig

export default config
