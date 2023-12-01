import { useRecoilValue, useSetRecoilState } from 'recoil'
import { createProductFormSelectorFamily } from '../store/selector'
import { createProductFormAtom } from '..'
import { useTranslation } from 'react-i18next'

export const DescriptionFieldCreateProductFormComponent = () => {
  const { t } = useTranslation()
  const setDescriptionFieldForm = useSetRecoilState(createProductFormSelectorFamily('description'))
  const {
    data: { description },
  } = useRecoilValue(createProductFormAtom)
  return (
    <section className='w-full flex flex-col space-y-2'>
      <h4 className='text-lg font-light ml-2'>{t('SELLER_VIEW.CREATE_PRODUCT.DESCRIPTION')}</h4>
      <textarea
        type='text'
        rows={8}
        value={description || ''}
        onChange={(event) => setDescriptionFieldForm(event.target.value)}
        placeholder={t('SELLER_VIEW.CREATE_PRODUCT.ENTER_DESCRIPTION_PRODUCTION')}
        className='w-4/5 py-2 bg-white border-1 border-solid border-gray-400 rounded-xl px-4 font-mono'
      />
    </section>
  )
}
