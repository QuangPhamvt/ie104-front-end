import { useRecoilValue, useSetRecoilState } from 'recoil'
import { createProductFormAtom } from '..'
import { createProductFormSelectorFamily } from '../store/selector'
import { useTranslation } from 'react-i18next'

export const TitleFieldCreateProductFormComponent = () => {
  const { t } = useTranslation()
  const setTitleFieldForm = useSetRecoilState(createProductFormSelectorFamily('title'))
  const {
    data: { title },
  } = useRecoilValue(createProductFormAtom)
  return (
    <section className='flex flex-col w-1/2 space-y-2 '>
      <h4 className='text-lg font-light ml-2'>{t('SELLER_VIEW.CREATE_PRODUCT.TITLE_PRODUCTION')}</h4>
      <input
        type='text'
        value={title || ''}
        placeholder={t('SELLER_VIEW.CREATE_PRODUCT.ENTER_TITLE_PRODUCTION')}
        onChange={(event) => setTitleFieldForm(event.target.value)}
        className='w-5/6 py-2 bg-gray-50 border-1 border-solid border-gray-300 rounded-xl px-4'
      />
    </section>
  )
}
