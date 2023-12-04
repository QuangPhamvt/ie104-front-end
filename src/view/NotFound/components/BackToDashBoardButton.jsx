import { useNavigate } from 'react-router-dom'
import '../styles.scss'

const BackToDashBoardButton = () => {
  const nav = useNavigate()
  const BackToDashBoard = () => {
    nav('/dashboard')
  }
  return (
    <p
      className='cursor-pointer fake-link'
      onClick={BackToDashBoard}
    >
      Back to <strong>Dashboard</strong>
    </p>
  )
}

export { BackToDashBoardButton }
