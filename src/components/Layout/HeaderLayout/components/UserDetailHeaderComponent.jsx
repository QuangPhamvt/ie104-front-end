import { authAtom } from '@/view/AuthView/store'
import { useRecoilValue } from 'recoil'

export const UserDetailHeaderComponent = () => {
  const auth = useRecoilValue(authAtom)
  return (
    <button className='px-4 py-3 rounded-lg bg-black'>
      <p className='text-sm text-white font-bold'>{auth.data.username}</p>
    </button>
  )
}
