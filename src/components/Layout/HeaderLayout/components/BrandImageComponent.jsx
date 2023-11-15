import { PUBLIC_IMAGE } from '@/utilities'

export const BrandImageComponent = () => {
  return (
    <section className='flex flex-row space-x-2 items-center mr-2'>
      <img
        src={PUBLIC_IMAGE.BRAND}
        width={36}
        height={36}
        className='ml-4'
      />
      <h1 className='text-xl'>Bun ShopFOOD</h1>
    </section>
  )
}
