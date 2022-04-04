import { createContext, useContext, useCallback } from 'react'
import { useRouter } from 'next/router'

//TODO check what translation do we need to import and import only that one
import es from '../translations/es.json'
import en from '../translations/en.json'

const I18NContext = createContext()

const languages = { es, en }

export function I18NProvider({ children }) {
  const { locale } = useRouter()

  const t = useCallback((key, options = {}, ...args) => {
    const { count } = options
    let translation = count === 1 ?
      languages[locale][key].substring(0, languages[locale][key].indexOf('|')) :
      languages[locale][key].substring(languages[locale][key].indexOf('|') + 1)

    if (args.length === 0) return translation

    args.forEach((value, index) => {
      translation = translation.replace(`%${index}`, value)
    })
    return translation
  }, [locale])

  return (
    <I18NContext.Provider value={{ t }}>
      {children}
    </I18NContext.Provider>
  )
}

export function useI18N() {
  const context = useContext(I18NContext)
  if (context === undefined) {
    throw new Error('useI18N must be used within a I18NProvider')
  }
  return context
}