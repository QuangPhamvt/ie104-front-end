import { useRecoilState } from 'recoil'
import { OPTION_SEARCH, optionSearchAtom } from '../store'
import { useTranslation } from 'react-i18next'

const styleButton = {
  isChoose: `bg-orange-500 p-4 text-white text-xl rounded-2xl`,
  notChoose: `bg-white p-4 text-xl text-black rounded-2xl border-2 border-orange-400 border-solid`,
}
export const OptionSearchComponent = () => {
  const { t } = useTranslation()
  const [optionSearch, setOptionSearch] = useRecoilState(optionSearchAtom)
  return (
    <section className='flex flex-row space-x-8 search--value'>
      <button
        onClick={() => setOptionSearch(OPTION_SEARCH.DISHES)}
        className={optionSearch === OPTION_SEARCH.DISHES ? styleButton.isChoose : styleButton.notChoose}
      >
        {t('SEARCH_VIEW.DISHES')}
      </button>
      <button
        onClick={() => setOptionSearch(OPTION_SEARCH.RESTAURANT)}
        className={optionSearch === OPTION_SEARCH.RESTAURANT ? styleButton.isChoose : styleButton.notChoose}
      >
        {t('SEARCH_VIEW.RESTAURANT')}
      </button>
    </section>
  )
}
