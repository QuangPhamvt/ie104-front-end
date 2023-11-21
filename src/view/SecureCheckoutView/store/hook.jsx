import { useSetRecoilState } from 'recoil'
import { statusPostCreateOrderAtom } from './atom'
import { STATUS_API_POST } from '@/utilities'
import { orderApi } from '@/api'

const usePostCreateOrder = () => {
  const setStatusPostCreateOrder = useSetRecoilState(statusPostCreateOrderAtom)
  const handlePostCreateOrder = async ({ seller_id, cart_id, price, cart_items = [] }) => {
    const products = cart_items.map((item) => {
      return { product_id: item.product.product_id, quantity: item.quantity }
    })
    console.log({
      seller_id,
      cart_id,
      price,
      products,
    })
    try {
      setStatusPostCreateOrder({ status: STATUS_API_POST.LOADING, message: undefined })
      const response = await orderApi.postCreateOrder({ seller_id, cart_id, price, products })
      setStatusPostCreateOrder({ status: STATUS_API_POST.HAS_VALUE, message: response.data.message })
    } catch (error) {
      console.error(error.response)
      setStatusPostCreateOrder({ status: STATUS_API_POST.HAS_ERROR, message: error })
    }
  }
  return { handlePostCreateOrder }
}

const SecureCheckout = {
  usePostCreateOrder,
}
export default SecureCheckout
