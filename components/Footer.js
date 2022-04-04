import { useI18N } from "context/i18n"

export function Footer() {
  const { t } = useI18N()
  return (
    <footer className='text-center text-xs hover:opacity-90 transition-opacity'>
      <a href='https://xkcd.com' target='_blank' rel='noopener noreferrer'>
        {t('ALL_COMICS_BY_XKCD')}
      </a>
    </footer>
  )
}