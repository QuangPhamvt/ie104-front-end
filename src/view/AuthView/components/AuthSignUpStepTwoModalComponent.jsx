import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import {
  authSignUpStepModalAtom,
  AUTH_SIGN_UP_STEP_MODEL,
  Auth,
  authSignUpModalAtom,
  authSignUpStatusFormSubmitAtom,
  getListProvinceSelector,
  districtAtom,
  wardAtom,
} from '../store'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { STATUS_API_POST } from '@/utilities'
import React from 'react'

export const AuthSignUpStepTwoModalComponent = () => {
  const listProvinceSelector = useRecoilValueLoadable(getListProvinceSelector)
  const getListDistrict = useRecoilValue(districtAtom)
  const getListWard = useRecoilValue(wardAtom)
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
  const authSignUpStatusFormSubmit = useRecoilValue(authSignUpStatusFormSubmitAtom)
  const setAuthSignUpStepModal = useSetRecoilState(authSignUpStepModalAtom)
  const { handleSignUpSubmitAuthForm } = Auth.useSignUpSubmitAuthForm()
  const { handleChangeAuthSignUpForm } = Auth.useChangeAuthSignUpForm()
  const { handleGetListDistrictSignUp } = Auth.useGetListDistrictSignUp()
  const { handleGetListWardSignUp } = Auth.useGetListWardSignUp()
  console.log(authSignUpModal.data)
  React.useEffect(() => {
    handleGetListDistrictSignUp()
  }, [authSignUpModal.data.province])
  React.useEffect(() => {
    handleGetListWardSignUp()
  }, [authSignUpModal.data.district])
  return (
    <>
      {/* USERNAME */}
      <label className='w-3/5'>
        <p className='text-xl text-gray-500'>Username</p>
        <input
          type='text'
          placeholder='username'
          name='username'
          value={authSignUpModal.data.username}
          onChange={handleChangeAuthSignUpForm}
          className='w-full px-4 py-4 border-1 border-solid rounded-md'
          style={{ borderColor: 'black' }}
        />
      </label>

      {/* PROVINCE */}
      <label className='w-3/5'>
        <p className='text-base text-gray-500'>Province</p>
        <div className='flex flex-row space-x-4 items-center'>
          <select
            className='p-2 rounded-md  border-1 border-gray-500 border-solid'
            name='province'
            onChange={handleChangeAuthSignUpForm}
          >
            <option>Please choice Province </option>
            {listProvinceSelector.state === 'hasValue' &&
              listProvinceSelector?.contents?.map((item) => {
                return (
                  <option
                    value={item.name}
                    key={item.code}
                  >
                    {item.name}
                  </option>
                )
              })}
          </select>
          {listProvinceSelector.state === 'loading' && <AiOutlineLoading3Quarters className='animate-spin' />}
        </div>
      </label>

      {/* DISTRICT*/}
      <label className='w-3/5'>
        <p className='text-base text-gray-500'>District</p>
        <div className='flex flex-row space-x-4 items-center'>
          <select
            className='p-2 rounded-md  border-1 border-gray-500 border-solid'
            name='district'
            onChange={handleChangeAuthSignUpForm}
          >
            <option>Please choice Province </option>
            {getListDistrict.states === 'hasValue' &&
              getListDistrict.data.map((item) => {
                return (
                  <option
                    value={item.name}
                    key={item.code}
                  >
                    {item.name}
                  </option>
                )
              })}
          </select>
          {getListDistrict.states === 'loading' && <AiOutlineLoading3Quarters className='animate-spin' />}
        </div>
      </label>

      {/* WARDs*/}
      <label className='w-3/5'>
        <p className='text-base text-gray-500'>Wards</p>
        <div className='flex flex-row space-x-4 items-center'>
          <select
            className='p-2 rounded-md  border-1 border-gray-500 border-solid'
            name='ward'
            onChange={handleChangeAuthSignUpForm}
          >
            <option>Please choice wards</option>
            {getListWard.state === 'hasValue' &&
              getListWard.data.map((item) => {
                return (
                  <option
                    value={item.name}
                    key={item.code}
                  >
                    {item.name}
                  </option>
                )
              })}
          </select>
          {getListWard.state === 'loading' && <AiOutlineLoading3Quarters className='animate-spin' />}
        </div>
      </label>

      {/* ROLE */}
      <section className='w-3/5 flex flex-row space-x-2'>
        <p className='text-xl text-gray-500 mr-2'>Role</p>
        <div className='flex flex-row justify-center items-center'>
          <input
            onChange={handleChangeAuthSignUpForm}
            id='BuyerSignUp'
            type='radio'
            name='role'
            value='buyer'
            style={{ borderColor: 'black' }}
          />
          <label
            htmlFor='BuyerSignUp'
            className='px-2'
          >
            Buyer
          </label>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <input
            onChange={handleChangeAuthSignUpForm}
            id='SellerSignUp'
            type='radio'
            name='role'
            value='seller'
            style={{ borderColor: 'black' }}
          />
          <label
            htmlFor='SellerSignUp'
            className='px-2'
          >
            Seller
          </label>
        </div>
      </section>

      {authSignUpStatusFormSubmit.status === STATUS_API_POST.HAS_ERROR && (
        <p style={{ color: 'red' }}>{authSignUpStatusFormSubmit.message}</p>
      )}

      <section className='w-3/5 flex flex-row justify-center space-x-2'>
        <button
          onClick={(e) => {
            e.preventDefault()
            setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.ONE })
          }}
          className='px-4 py-1 text-lg text-gray-500 font-bold w-full border-1 border-solid border-black rounded'
        >
          PREVIOUS
        </button>
        {authSignUpModal.data.role === 'seller' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.THREE })
            }}
            className='px-4 py-1 text-lg font-bold text-white w-full bg-orange-500 rounded'
          >
            NEXT
          </button>
        ) : (
          <button
            onClick={handleSignUpSubmitAuthForm}
            className='px-4 py-1 text-lg font-bold text-white w-full bg-orange-500 rounded'
          >
            OK
          </button>
        )}
      </section>
    </>
  )
}
