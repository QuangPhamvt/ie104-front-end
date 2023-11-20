export const SidebarHistoryComponent = () => {
  return (
    <article className='w-full px-4 py-8 h-full border-r-1 border-solid border-gray-200'>
      <section className='flex flex-col space-y-2'>
        <h4 className='text-xl'>Manage Cart Order</h4>
        <ul className='pl-4 w-full flex flex-col space-y-2 text-gray-500'>
          <li>
            <p className=''>Cart List</p>
          </li>
          <li>
            <p>Have Ordered</p>
          </li>
        </ul>
      </section>
    </article>
  )
}
