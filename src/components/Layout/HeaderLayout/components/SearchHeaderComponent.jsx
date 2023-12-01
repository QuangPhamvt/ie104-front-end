import { IoIosSearch } from 'react-icons/io'
import HeaderLayout from '../store/hook'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { searchProductFormAtom } from '../store'
import { STATE } from '@/utilities'
import { useTranslation } from 'react-i18next'
export const SearchHeaderComponent = () => {
  const { t } = useTranslation()
  const { handleSearchProduct } = HeaderLayout.useSearchProduct()
  const {
    data: { slug },
  } = useRecoilValue(searchProductFormAtom)
  const setSearchProductForm = useSetRecoilState(searchProductFormAtom)
  const handleChangeInput = (event) => {
    const value = event.target.value
    setSearchProductForm((preState) => ({
      ...preState,
      state: STATE.HAS_VALUE,
      data: { ...preState.data, slug: value },
    }))
  }
  return (
    <article className='bg-white px-4 py-2 w-2/5 flex flex-row justify-between items-center rounded-lg border-1 border-solid border-gray-300'>
      <input
        value={slug || ''}
        onChange={handleChangeInput}
        placeholder={t('HEADER_LAYOUT.SEARCH_PLACEHOLDER')}
        className='w-full'
      />
      <IoIosSearch
        size={24}
        onClick={handleSearchProduct}
        className='hover-cursor text-orange-500'
      />
    </article>
  )
}
