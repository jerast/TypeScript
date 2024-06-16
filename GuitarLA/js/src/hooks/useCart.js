import { useState, useEffect, useMemo } from 'react'
import { db } from '../data/db'

export const useCart = () => {

   const initialCart = () => {
		const loadCart = localStorage.getItem('cart')
		return loadCart ? JSON.parse(loadCart) : []
	}

	const [data] = useState(db)
	const [cart, setCart] = useState(initialCart)

	const MIN_ITEMS = 1;
	const MAX_ITEMS = 5;

	
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	
	const findCartItem = (itemId) => {
		return cart.findIndex(item => itemId === item.id)
	}

	const addToCart = (newItem) => {
		const itemIndex = findCartItem(newItem.id)
		
		if (itemIndex >= 0) {
			increaseQuantity(newItem.id)
			return
		}

		newItem.quantity = 1
		setCart(prevCart => [...prevCart, newItem])
	}

	const removeFromCart = (itemId) => {
		setCart(prevCart => prevCart.filter(guitar => guitar.id !== itemId))
	}

	const increaseQuantity = (itemId) => {
		const itemIndex = findCartItem(itemId)

		if (cart[itemIndex].quantity >= MAX_ITEMS) return

		const cartCopy = structuredClone(cart)
		cartCopy[itemIndex].quantity++
		setCart(cartCopy)
	}

	const decreaseQuantity = (itemId) => {
		const itemIndex = findCartItem(itemId)

		if (cart[itemIndex].quantity <= MIN_ITEMS) return 

		const cartCopy = structuredClone(cart)
		cartCopy[itemIndex].quantity--
		setCart(cartCopy)
	}

	const clearCart = () => {
		setCart([])
	}

	const cartIsEmpty = useMemo(
		() => !cart.length, 
	[cart])

	const cartTotal = useMemo(
		() => cart.reduce((total, item) => total + (item.price * item.quantity), 0), 
	[cart])

   return {
      data,
      cart,
      MIN_ITEMS,
      MAX_ITEMS,

		cartIsEmpty,
		cartTotal,

      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity
   }
}