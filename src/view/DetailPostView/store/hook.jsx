import { useRecoilValue, useSetRecoilState } from 'recoil'
import { createCartDetailProductAtom, findProductByCategoryAtom, searchDetailProductionAtom } from './atoms'
import { STATUS_API_POST } from '@/utilities'
import { productApi } from '@/api/productApi'
import { cartApi } from '@/api/cartApi'

const useCreateCartProduct = () => {
  const setCreateCartDetailProduct = useSetRecoilState(createCartDetailProductAtom)
  const {
    data: { cart_items, price },
  } = useRecoilValue(createCartDetailProductAtom)
  const handleCreateCartProduct = async () => {
    try {
      setCreateCartDetailProduct((preState) => ({ ...preState, status: STATUS_API_POST.LOADING }))
      const payload = {
        price,
        cart_items: cart_items.map((item) => {
          return { product_id: item.product_id, quantity: item.quantity }
        }),
      }
      const response = await cartApi.createCart(payload)
      setCreateCartDetailProduct({
        status: STATUS_API_POST.HAS_VALUE,
        message: response.data.message,
        data: { price: undefined, cart_items: [] },
      })
    } catch (error) {
      console.log(error.data)
      setCreateCartDetailProduct((preState) => ({
        ...preState,
        status: STATUS_API_POST.HAS_ERROR,
        message: error.data.message,
      }))
    }
  }
  return { handleCreateCartProduct }
}

const useFindProductByCategory = () => {
  const setFindProductByCategory = useSetRecoilState(findProductByCategoryAtom)
  const { data } = useRecoilValue(searchDetailProductionAtom)
  const handleFindProductByCategory = async (categories_id) => {
    try {
      setFindProductByCategory((preState) => ({ ...preState, status: STATUS_API_POST.LOADING }))
      console.log(categories_id)
      const response = await productApi.postFindProductByCategory({
        categories_id: categories_id,
        author_id: data.author.author_id,
      })
      console.log(response.data)
      setFindProductByCategory({
        status: STATUS_API_POST.HAS_VALUE,
        message: response.data.message,
        data: response.data.data,
      })
    } catch (error) {
      console.log(error)
      setFindProductByCategory({ status: STATUS_API_POST.HAS_ERROR, message: error.data, data: [] })
    }
  }
  return { handleFindProductByCategory }
}
const useAddDetailProductToCart = () => {
  const setCreateCartDetailProduct = useSetRecoilState(createCartDetailProductAtom)
  const handleAddDetailProductToCart = ({ product_id, title, priceProduct }) => {
    setCreateCartDetailProduct((preState) => {
      let cart_items
      // CHECK is Exist any product
      if (!preState.data.price)
        return {
          ...preState,
          data: {
            price: priceProduct,
            cart_items: [
              {
                product_id: product_id,
                title: title,
                price: priceProduct,
                quantity: 1,
              },
            ],
          },
        }
      const addPrice = preState.data.price + priceProduct
      // Check Exist product in array
      const isExistInCart_items = preState.data.cart_items.find((item) => {
        return item.product_id === product_id
      })
      if (!isExistInCart_items) {
        cart_items = [...preState.data.cart_items, { product_id, title, price: priceProduct, quantity: 1 }]
      } else {
        const data = preState.data.cart_items
        cart_items = data.map((item) => {
          if (item.product_id === product_id) return { ...item, quantity: item.quantity + 1 }
          return item
        })
      }
      return {
        ...preState,
        data: {
          ...preState.data,
          price: addPrice,
          cart_items,
        },
      }
    })
  }
  return { handleAddDetailProductToCart }
}

const useSubDetailProductToCart = () => {
  const setCreateCartDetailProduct = useSetRecoilState(createCartDetailProductAtom)
  const handleSubDetailProductToCart = ({ product_id, priceProduct }) => {
    setCreateCartDetailProduct((preState) => {
      const addPrice = preState.data.price - priceProduct
      const data = preState.data.cart_items
      const cart_items = data.map((item) => {
        if (item.product_id === product_id && item.quantity === 1) {
          return undefined
        }
        if (item.product_id === product_id) return { ...item, quantity: item.quantity - 1 }
        return item
      })
      return {
        ...preState,
        data: {
          ...preState.data,
          price: addPrice,
          cart_items: cart_items.filter((item) => item !== undefined),
        },
      }
    })
  }
  return { handleSubDetailProductToCart }
}
const DetailProduct = {
  useCreateCartProduct,
  useFindProductByCategory,
  useAddDetailProductToCart,
  useSubDetailProductToCart,
}
export default DetailProduct
