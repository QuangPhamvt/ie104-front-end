export const useSetStart = (start) => {
  let color
  if (start > 4.0) color = 'green'
  if (start <= 4.0 && start > 3.0) color = 'rgb(250, 204, 21)'
  if (start <= 3.0 && start > 2.0) color = 'orange'
  if (start <= 2.0) color = 'red'

  return { color }
}

const Home = {
  useSetStart,
}
export default Home
