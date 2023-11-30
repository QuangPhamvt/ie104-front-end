/* eslint-disable no-unused-vars */
import { useSearchParams } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { useRecoilValue } from 'recoil'
import { postCreateAccountState } from './store'
import { FaCheck } from 'react-icons/fa'
import { MdOutlineErrorOutline } from 'react-icons/md'

import { STATE } from '@/utilities'
import { useNavigate } from 'react-router-dom'
import VerifyTokenAction from './store/hook'
import React from 'react'

const VerifyTokenView = () => {
  const [searchParams, _] = useSearchParams()
  const postCreateAccount = useRecoilValue(postCreateAccountState)
  const navigate = useNavigate()
  const { handleCreateAccountUseToken } = VerifyTokenAction.useCreateAccountUseToken()
  console.log(searchParams.get('token'))
  React.useEffect(() => {
    handleCreateAccountUseToken(searchParams.get('token'))
  }, [])
  console.log(searchParams.get('token'))
  return (
    <article className='h-screen w-screen flex flex-col items-center justify-start'>
      <section className='mt-28 w-116 h-68 shadow-xl rounded border-1 border-solid border-gray-300 p-4 flex flex-col justify-center items-center animate-bounce'>
        <h2 className='text-orange-400'>Please wait for we checking</h2>
        <div className=''>
          {postCreateAccount.state === STATE.HAS_VALUE && (
            <FaCheck
              className='m-4'
              color='#FFA33C'
              size={68}
            />
          )}
          {postCreateAccount.state === STATE.LOADING && <ThreeDots color='#FFA33C' />}
          {postCreateAccount.state === STATE.HAS_ERROR && (
            <MdOutlineErrorOutline
              className='m-4'
              color='#FFA33C'
              size={68}
            />
          )}
        </div>
        {postCreateAccount.state === STATE.HAS_VALUE && (
          <div className='italic text-xl font-medium'>Success to accept</div>
        )}
        {postCreateAccount.state === STATE.HAS_ERROR && (
          <div className='flex flex-col space-y-4 justify-center items-center'>
            <div
              style={{ textAlign: 'center' }}
              className='italic text-base font-normal'
            >
              Something wrong with token, please back to home
            </div>
            <button
              onClick={(event) => {
                event.preventDefault()
                navigate('/')
              }}
              className='py-2 px-4 bg-orange-400 rounded-xl redirect--btn border-2 w-3/5 flex justify-center items-center'
            >
              <p className='text-lg font-extrabold text-white'>Back to Home</p>
            </button>
          </div>
        )}
      </section>
    </article>
  )
}
export default VerifyTokenView
