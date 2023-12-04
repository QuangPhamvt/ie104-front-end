import { authAtom } from '@/view/AuthView/store'
import { MdModeEdit } from 'react-icons/md'
import { useRecoilState, useRecoilValue } from 'recoil'
import { BuyerViewHook, uploadBuyerFormState } from '../store'
const HeaderChangeProfileManageAccountComponent = () => {
  const auth = useRecoilValue(authAtom)
  const [uploadBuyerForm, setUploadBuyerForm] = useRecoilState(uploadBuyerFormState)
  const { handlePostUpdateBuyer } = BuyerViewHook.usePostUpdateBuyer()
  console.log(uploadBuyerForm)
  return (
    <section className='w-full p-4 flex flex-col space-y-4 bg-white rounded-xl '>
      <div className='w-full flex justify-between flex-row'>
        <p
          style={{ fontFamily: 'monospace' }}
          className='font-bold text-xl pl-2 pb-2 pr-4 border-b-1 border-solid border-gray-400 w-fit'
        >
          Setting Profile
        </p>
        <div
          className='p-1 flex justify-center items-center'
          value={uploadBuyerForm.username || ''}
          onClick={(event) => {
            event.preventDefault()
            handlePostUpdateBuyer()
          }}
        >
          <MdModeEdit size={24} />
        </div>
      </div>
      <div className='flex flex-row space-x-4 px-2 pb-4 border-b-1 border-solid border-gray-200'>
        <div className='h-24 w-24 rounded-full bg-gray-50 border-4 border-solid border-gray-400' />
        <div className='flex flex-col h-24 justify-end pb-4'>
          <input
            className='text-xl font-bold text-black p-1 pl-4 border-1 border-solid border-gray-300 rounded'
            type='text'
            placeholder={`${auth.data.username}`}
            value={uploadBuyerForm.username || ''}
            onChange={(event) => {
              event.preventDefault()
              setUploadBuyerForm((preState) => ({
                ...preState,
                username: event.target.value,
              }))
            }}
          />
        </div>
      </div>
    </section>
  )
}
const ContentChangeProfileManageAccountComponent = () => {
  const auth = useRecoilValue(authAtom)
  const [uploadBuyerForm, setUploadBuyerForm] = useRecoilState(uploadBuyerFormState)
  return (
    <section className='w-full p-6 flex flex-row space-x-4 '>
      <div className='grow bg-white rounded-xl p-4'>
        <p
          className='font-bold text-xl pr-4 w-fit mb-4'
          style={{ fontFamily: 'monospace' }}
        >
          Address
        </p>
        <div className='flex flex-col pl-4 space-y-2'>
          <div className='flex space-x-2 items-center mr-8 border-b-1 profile--banking-item'>
            <input
              type='text'
              placeholder={`Province: ${auth.data.province}`}
              className='text-base p-1 w-full border-1 border-solid border-gray-300 italic'
              value={uploadBuyerForm.address.province || ''}
              onChange={(event) => {
                event.preventDefault()
                setUploadBuyerForm((preState) => ({
                  ...preState,
                  address: { ...preState.address, province: event.target.value },
                }))
              }}
            />
          </div>
          <div className='flex space-x-2 items-center mr-8 border-b-1 profile--banking-item'>
            <input
              type='text'
              placeholder={`District: ${auth.data.district}`}
              className='text-base p-1 w-full border-1 border-solid border-gray-300 italic'
              value={uploadBuyerForm.address.district || ''}
              onChange={(event) => {
                event.preventDefault()
                setUploadBuyerForm((preState) => ({
                  ...preState,
                  address: { ...preState.address, district: event.target.value },
                }))
              }}
            />
          </div>
          <div className='flex space-x-2 items-center mr-8 border-b-1 profile--banking-item'>
            <input
              type='text'
              placeholder={`Ward: ${auth.data.ward}`}
              className='text-base p-1 w-full border-1 border-solid border-gray-300 italic'
              value={uploadBuyerForm.address.ward || ''}
              onChange={(event) => {
                event.preventDefault()
                setUploadBuyerForm((preState) => ({
                  ...preState,
                  address: { ...preState.address, ward: event.target.value },
                }))
              }}
            />
          </div>
        </div>
      </div>

      <div className='grow p-4 flex flex-col rounded-xl bg-white' />
    </section>
  )
}
const ChangeProfileManageAccountComponent = () => {
  return (
    <article className='profile w-full h-full flex flex-col shadow-xl rounded-xl overflow-hidden '>
      <div className='px-6 pt-6 overflow-hidden'>
        <HeaderChangeProfileManageAccountComponent />
      </div>
      <ContentChangeProfileManageAccountComponent />
    </article>
  )
}
export default ChangeProfileManageAccountComponent
