import { useState } from 'react'
import { MenuItem, OrderItem } from '../types'

export const useOrder = () => {

   const [order, setOrder] = useState<OrderItem[]>([])
   const [tip, setTip] = useState(0)


   const increaseQuantity = (itemId: MenuItem['id']) => {
      const updatedOrder = order.map( orderItem => 
         orderItem.id === itemId 
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
      )
		setOrder(updatedOrder)
	}

	const addItem = (newItem : MenuItem) => {
		const itemIndex = order.find(item => item.id === newItem.id)
		
		if (itemIndex) {
			increaseQuantity(newItem.id)
			return
		}

		const newOrderItem : OrderItem = { ...newItem, quantity: 1 }
		setOrder(prevOrder => [...prevOrder, newOrderItem])
	}

   const removeItem = (itemId: OrderItem['id']) => {
		setOrder(order.filter(orderItem => orderItem.id !== itemId))
	}

   const placeOrder = () => {
      setOrder([])
      setTip(0)
   }


   return { 
      order,
      tip,
      setTip,
      addItem,
      removeItem,
      placeOrder,
   }
}