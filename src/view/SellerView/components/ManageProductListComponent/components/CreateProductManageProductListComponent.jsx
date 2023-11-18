import React from 'react'
import { ManageProductList, createProductFormAtom, openDialogStateCreateProductAtom } from '..'
import { useRecoilState, useRecoilValue } from 'recoil'
import { TitleFieldCreateProductFormComponent } from './TitleFieldCreateProductionComponent'
import { CategoriesFieldCreateProductFormComponent } from './CategoriesFieldCreateProductionComponent'
import { DescriptionFieldCreateProductFormComponent } from './DescriptionFieldCreateProductionComponent'
import { UploadImageFieldCreateProductionFormComponent } from './UploadImageFieldCreateProductionComponent'
import { LocationFieldCreateProductionFormComponent } from './LocationFieldCreateProductionComponent'
import { PriceFieldCreateProductionFormComponent } from './PriceFieldCreateProductionComponent'
import { DialogCreateProductComponent } from './DialogCreateProductComponent'

const CreateProductManageProductionListComponent = () => {
  const { handleSetCategories } = ManageProductList.useGetCategories()
  const { handleSubmitCreateProductForm } = ManageProductList.useCreateProduct()
  const { data } = useRecoilValue(createProductFormAtom)
  const [open, setOpen] = useRecoilState(openDialogStateCreateProductAtom)

  React.useEffect(() => {
    handleSetCategories()
  }, [])
  console.log(data)
  return (
    <>
      <DialogCreateProductComponent open={open} />
      <article className='w-full p-8 flex flex-col space-y-6 shadow-lg mt-8'>
        <section className=''>
          <h3 className='font-base text-orange-400 border-b-1 py-2 border-solid border-gray-300 mb-4'>
            Create Your Product
          </h3>
        </section>

        <section className='w-full flex flex-row  justify-center items-center'>
          <TitleFieldCreateProductFormComponent />
          <div className='border-l-1 border-solid border-gray-300 h-24'></div>
          <CategoriesFieldCreateProductFormComponent />
        </section>

        <section className='w-full flex flex-col space-y-2'></section>

        <DescriptionFieldCreateProductFormComponent />

        <UploadImageFieldCreateProductionFormComponent />

        <section className='flex flex-row w-full space-x-12 justify-between'>
          <LocationFieldCreateProductionFormComponent />
          <PriceFieldCreateProductionFormComponent />
        </section>

        <section className='flex flex-row space-x-8 pt-4'>
          <button className='grow py-2 text-lg font-bold bg-white border-1 border-solid border-gray-300'>Cancel</button>
          <button
            onClick={(event) => {
              event.preventDefault()
              handleSubmitCreateProductForm()
              setOpen(true)
            }}
            className='grow py-2 text-lg text-white bg-orange-400 font-bold'
          >
            Save Production
          </button>
        </section>
      </article>
    </>
  )
}
export default CreateProductManageProductionListComponent
