import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../../context/ShopContext.jsx'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
  const [searchParams] = useSearchParams()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')
  const userId = searchParams.get('userId')
  const paymentMethod = searchParams.get('paymentMethod')
  const razorpay_order_id = searchParams.get('razorpay_order_id')

  const verifyPayment = async () => {
    if (!token) return

    try {
      let res

      if (paymentMethod === 'Razorpay') {
        res = await axios.post(
          `${backendUrl}/api/order/verifyRazorpay`,
          { userId, razorpay_order_id },
          { headers: { token } }
        )
      } else {
        res = await axios.post(
          `${backendUrl}/api/order/verifyStripe`,
          { success, orderId, userId },
          { headers: { token } }
        )
      }

      if (res.data.success) {
        setCartItems({})
        navigate('/orders')
      } else {
        navigate('/cart')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message || 'Payment verification failed')
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [token])

  return <div>Verifying Payment...</div>
}

export default Verify
