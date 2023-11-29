export const useSetStart = (start) => {
  let color
  if (start > 4.0) color = '#508D69'
  if (start <= 4.0 && start > 3.0) color = '#EBB02D'
  if (start <= 3.0 && start > 2.0) color = 'orange'
  if (start <= 2.0) color = '#D80032'

  return { color }
}

const Home = {
  useSetStart,
}
export default Home
