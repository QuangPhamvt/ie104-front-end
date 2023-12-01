import { useRecoilState, useRecoilValue } from 'recoil'
import { languageState, openDropDownState } from '../store'
import { useTranslation } from 'react-i18next'

export const DropDownChangeLanguageComponent = () => {
  const { t, i18n } = useTranslation()
  const { isOpen } = useRecoilValue(openDropDownState)
  const [getLanguage, setLanguage] = useRecoilState(languageState)
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <>
      {isOpen && (
        <div className='flex flex-col border-1 bg-white border-gray-400 w-32 space-y-2 rounded  px-2 py-2 items-center justify-center'>
          <button
            onClick={(event) => {
              event.preventDefault()
              handleChangeLanguage('en')
              setLanguage({ language: 'EN' })
            }}
            style={{
              color: `${getLanguage.language === 'EN' ? 'black' : 'gray'}`,
              fontWeight: `${getLanguage.language === 'EN' ? '700' : '400'}`,
            }}
            className='border-b-1 border-solid border-gray-500 w-full flex justify-center items-center pb-1 bg-white'
          >
            <p>{t('change_language.EN')}</p>
          </button>
          <button
            onClick={(event) => {
              event.preventDefault()
              handleChangeLanguage('vn')
              setLanguage({ language: 'VN' })
            }}
            style={{
              color: `${getLanguage.language === 'VN' ? 'black' : 'gray'}`,
              fontWeight: `${getLanguage.language === 'VN' ? '700' : '400'}`,
            }}
            className='border-b-1 border-solid border-gray-500 w-full flex justify-center items-center pb-1 bg-white'
          >
            <p>{t('change_language.VN')}</p>
          </button>
        </div>
      )}
    </>
  )
}
