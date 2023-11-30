import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import {
  authSignUpStepModalAtom,
  AUTH_SIGN_UP_STEP_MODEL,
  Auth,
  authSignUpModalAtom,
  getListProvinceSelector,
  districtAtom,
  wardAtom,
} from '../store'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import React from 'react'

export const AuthSignUpStepTwoModalComponent = () => {
  const listProvinceSelector = useRecoilValueLoadable(getListProvinceSelector)
  const getListDistrict = useRecoilValue(districtAtom)
  const getListWard = useRecoilValue(wardAtom)
  const authSignUpModal = useRecoilValue(authSignUpModalAtom)
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
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={authSignUpModal.data.username}
          onChange={handleChangeAuthSignUpForm}
          className='w-full px-4 py-4 border-solid rounded-md border-1 '
          style={{ borderColor: 'black' }}
        />
      </label>

      {/* PROVINCE */}
      <label className='w-3/5'>
        <div className='flex flex-row items-center space-x-4 '>
          <select
            className='w-full p-2 border-gray-500 border-solid rounded-md border-1'
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
        <div className='flex flex-row items-center w-full space-x-4'>
          <select
            className='w-full p-2 border-gray-500 border-solid rounded-md border-1'
            name='district'
            onChange={handleChangeAuthSignUpForm}
          >
            <option>Please choice District</option>
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
        <div className='flex flex-row items-center space-x-4'>
          <select
            className='w-full p-2 border-gray-500 border-solid rounded-md border-1'
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
      <section className='flex flex-row w-3/5 space-x-2'>
        <p className='mr-2 text-xl text-gray-500'>Role</p>
        <div className='flex flex-row items-center justify-center'>
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
        <div className='flex flex-row items-center justify-center'>
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

      <section className='flex flex-row justify-center w-3/5 space-x-2'>
        <button
          onClick={(e) => {
            e.preventDefault()
            setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.ONE })
          }}
          className='w-full px-4 py-1 text-lg font-bold text-gray-500 border-black border-solid rounded border-1 btn-sign'
        >
          PREVIOUS
        </button>
        {authSignUpModal.data.role === 'seller' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setAuthSignUpStepModal({ step: AUTH_SIGN_UP_STEP_MODEL.THREE })
            }}
            className='w-full px-4 py-1 text-lg font-bold text-white bg-orange-500 rounded'
          >
            NEXT
          </button>
        ) : (
          <button
            onClick={handleSignUpSubmitAuthForm}
            className='w-full px-4 py-1 text-lg font-bold text-white bg-orange-500 rounded btn-sign'
          >
            OK
          </button>
        )}
      </section>
    </>
  )
}
